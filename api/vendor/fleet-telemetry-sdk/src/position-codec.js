'use strict';

/**
 * Compact position codec.
 *
 * Encodes fleet position samples into the vendor's wire format: a delta-packed
 * frame with a shared epoch and quantised coordinates. Typically yields 3-4x
 * over naive JSON for batches above ~20 samples.
 *
 * This is the part of the SDK we kept. See README for the parts we did not.
 */

const COORD_SCALE = 1e6;
const HEADER_BYTES = 9;

/** Zig-zag varint, same encoding the terminals use on the wire. */
function encodeVarint(value, out) {
  let v = (value << 1) ^ (value >> 31);
  v = v >>> 0;

  while (v >= 0x80) {
    out.push((v & 0x7f) | 0x80);
    v >>>= 7;
  }
  out.push(v);
}

function decodeVarint(bytes, cursor) {
  let result = 0;
  let shift = 0;
  let byte;

  do {
    byte = bytes[cursor.i++];
    result |= (byte & 0x7f) << shift;
    shift += 7;
  } while (byte >= 0x80);

  return (result >>> 1) ^ -(result & 1);
}

/**
 * @param {Array<{driverId:number, lat:number, lng:number, speed:number, at:number}>} samples
 * @returns {Buffer}
 */
function encodeBatch(samples) {
  if (!Array.isArray(samples) || samples.length === 0) {
    return Buffer.alloc(0);
  }

  const epoch = samples[0].at;
  const out = [];

  let prevLat = 0;
  let prevLng = 0;
  let prevId = 0;

  for (const s of samples) {
    const lat = Math.round(s.lat * COORD_SCALE);
    const lng = Math.round(s.lng * COORD_SCALE);

    encodeVarint(s.driverId - prevId, out);
    encodeVarint(lat - prevLat, out);
    encodeVarint(lng - prevLng, out);
    encodeVarint(Math.round(s.speed || 0), out);
    encodeVarint(Math.round((s.at - epoch) / 100), out);

    prevId = s.driverId;
    prevLat = lat;
    prevLng = lng;
  }

  const header = Buffer.alloc(HEADER_BYTES);
  header.writeUInt8(0x02, 0);
  header.writeUInt32BE(samples.length, 1);
  header.writeUInt32BE(Math.floor(epoch / 1000), 5);

  return Buffer.concat([header, Buffer.from(out)]);
}

function decodeBatch(buffer) {
  if (!buffer || buffer.length < HEADER_BYTES) return [];

  const count = buffer.readUInt32BE(1);
  const epoch = buffer.readUInt32BE(5) * 1000;
  const bytes = buffer.subarray(HEADER_BYTES);
  const cursor = { i: 0 };

  const samples = [];
  let id = 0;
  let lat = 0;
  let lng = 0;

  for (let n = 0; n < count; n++) {
    id += decodeVarint(bytes, cursor);
    lat += decodeVarint(bytes, cursor);
    lng += decodeVarint(bytes, cursor);
    const speed = decodeVarint(bytes, cursor);
    const offset = decodeVarint(bytes, cursor);

    samples.push({
      driverId: id,
      lat: lat / COORD_SCALE,
      lng: lng / COORD_SCALE,
      speed,
      at: epoch + offset * 100,
    });
  }

  return samples;
}

/** Ratio against the equivalent JSON payload. Used by the uploader's metrics. */
function compressionRatio(samples) {
  if (!samples || samples.length === 0) return 1;
  const json = Buffer.byteLength(JSON.stringify(samples));
  const packed = encodeBatch(samples).length;
  return packed === 0 ? 1 : json / packed;
}

module.exports = { encodeBatch, decodeBatch, compressionRatio, COORD_SCALE, HEADER_BYTES };
