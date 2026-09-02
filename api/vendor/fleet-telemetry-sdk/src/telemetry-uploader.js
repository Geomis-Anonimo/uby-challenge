'use strict';

/**
 * Telemetry uploader.
 *
 * Feeds the FleetLink coverage dashboards. Samples are accumulated locally and
 * flushed on a fixed window; the collector rejects windows shorter than 30s.
 */

const { encodeBatch, compressionRatio } = require('./position-codec.js');
const { SUPPORTED_PROTOCOL, isProtocolCompatible } = require('./protocol.js');

const DEFAULT_TIMEOUT_MS = 4000;
const DEFAULT_WINDOW_MS = 60000;

class TelemetryUploader {
  constructor(options = {}) {
    this.endpoint = options.endpoint || process.env.FLEETLINK_ENDPOINT || '';
    this.timeoutMs = options.timeoutMs || DEFAULT_TIMEOUT_MS;
    this.logger = options.logger || console;

    this.windowMs = options.windowMs || DEFAULT_WINDOW_MS;

    this.active = false;
    this.negotiated = null;
    this.disabledReason = null;

    this.pending = [];
    this.timer = null;

    this.stats = { uploaded: 0, bytes: 0, failures: 0, flushes: 0, ratio: 0 };
  }

  /**
   * Negotiates the wire protocol with the collector before going live.
   * The collector advertises its protocol in the handshake; if it is ahead of
   * what this SDK build speaks, we stay down rather than corrupt the stream.
   */
  async start() {
    if (!this.endpoint) {
      this.disabledReason = 'no endpoint configured';
      return false;
    }

    let advertised = null;

    try {
      const res = await fetch(`${this.endpoint}/handshake`, {
        signal: AbortSignal.timeout(this.timeoutMs),
      });
      const body = await res.json();
      advertised = body.protocol;
    } catch (err) {
      this.disabledReason = `handshake failed: ${err.message}`;
      this.logger.warn(`[fleetlink] uploader down - ${this.disabledReason}`);
      return false;
    }

    this.negotiated = advertised;

    if (!isProtocolCompatible(advertised)) {
      this.disabledReason =
        `collector speaks protocol ${advertised}, this SDK build speaks ${SUPPORTED_PROTOCOL}`;
      this.logger.warn(
        `[fleetlink] uploader DISABLED - ${this.disabledReason}. ` +
        `Falling back to the host application's own exporter. ` +
        `Upgrade to SDK 8.x or pin the collector to ${SUPPORTED_PROTOCOL}.`,
      );
      return false;
    }

    this.active = true;
    this.timer = setInterval(() => void this.flush(), this.windowMs);
    this.logger.info(`[fleetlink] uploader active on protocol ${advertised}`);
    return true;
  }

  async push(sample) {
    if (!this.active) return false;

    this.pending.push(sample);
    return true;
  }

  async flush() {
    if (this.pending.length === 0) return;

    const batch = this.pending;
    this.pending = [];

    const frame = encodeBatch(batch);

    try {
      await fetch(`${this.endpoint}/stream`, {
        method: 'POST',
        headers: { 'content-type': 'application/octet-stream' },
        body: frame,
        signal: AbortSignal.timeout(this.timeoutMs),
      });

      this.stats.flushes++;
      this.stats.uploaded += batch.length;
      this.stats.bytes += frame.length;
      this.stats.ratio = compressionRatio(batch);
      return true;
    } catch {
      this.stats.failures++;
      return false;
    }
  }

  status() {
    return {
      active: this.active,
      protocol: { supported: SUPPORTED_PROTOCOL, collector: this.negotiated },
      disabledReason: this.disabledReason,
      windowMs: this.windowMs,
      pending: this.pending.length,
      ...this.stats,
    };
  }
}

module.exports = { TelemetryUploader, DEFAULT_TIMEOUT_MS };
