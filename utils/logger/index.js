/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
const { createLogger, format, transports } = require('winston');
const dayjs = require('dayjs');

const {
  combine, timestamp, label, printf, colorize,
} = format;


const myFormat = printf(({ level, message, timestamp }) => {
  timestamp = dayjs(timestamp).format('MM-DD-YY HH:mm:ss');
  return `${timestamp} ${level}: ${message}`;
});

module.exports = createLogger({
  level: 'debug',
  format: combine(colorize(), label({ label: '' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
  ],
});
