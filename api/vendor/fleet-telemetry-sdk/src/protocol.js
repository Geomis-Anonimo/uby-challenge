'use strict';

/** Wire protocol this SDK build implements. Bumped with each minor release. */
const SUPPORTED_PROTOCOL = '7.4';

function parse(version) {
  const [major, minor] = String(version || '').split('.').map(Number);
  return { major: major || 0, minor: minor || 0 };
}

/**
 * The collector must not be ahead of the SDK on the major line. Frame layout
 * changed in 8.0 (variable-width driver ids), so an older SDK cannot read or
 * write 8.x streams safely.
 */
function isProtocolCompatible(advertised) {
  const a = parse(advertised);
  const s = parse(SUPPORTED_PROTOCOL);

  if (a.major !== s.major) return false;
  return a.minor <= s.minor;
}

module.exports = { SUPPORTED_PROTOCOL, isProtocolCompatible, parse };
