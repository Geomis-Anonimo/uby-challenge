'use strict';

const codec = require('./position-codec.js');
const { TelemetryUploader } = require('./telemetry-uploader.js');
const protocol = require('./protocol.js');
const { ERROR_CODES } = require('./error-codes.js');
const { TELEMETRY_FIELDS } = require('./field-dictionary.js');

module.exports = {
  ...codec,
  TelemetryUploader,
  ...protocol,
  ERROR_CODES,
  TELEMETRY_FIELDS,
};
