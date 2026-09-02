# @fleetlink/telemetry-sdk

Vendored copy of the FleetLink telemetry SDK, 7.4.2.

Kept in-tree rather than in `package.json` because our build is patched: the
upstream `encodeBatch` mis-handles the shared epoch when a batch spans a second
boundary, and the fix was never merged upstream.

## What it provides

**Position codec** (`src/position-codec.js`) — delta-packed, quantised frames.
Roughly 10x over equivalent JSON for typical batch sizes. Used on the hot path.

**Telemetry uploader** (`src/telemetry-uploader.js`) — streams samples to the
FleetLink collector for the coverage dashboards. Negotiates the wire protocol
with the collector on startup.

**Protocol utilities** (`src/protocol.js`) — version parsing and compatibility.

**Reference tables** (`src/error-codes.js`, `src/field-dictionary.js`) —
generated from the vendor spreadsheet; do not hand-edit.

## Configuration

| variable | meaning |
|---|---|
| `FLEETLINK_ENDPOINT` | collector base URL |

## Support

Vendor support is via the partner portal, 5 business day SLA.
Homologated firmware: TK-919 rev. 4.2c. Contract MA-2019-0447, through 2027.

See `docs/PROTOCOL.md` and `docs/CHANGELOG.md`.
