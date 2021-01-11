"use strict";

const env = process.env.NODE_ENV || "development";
const host = process.env.APP_HOST || "localhost";
const port = process.env.APP_PORT || 8081;
const name = process.env.APP_NAME || "jokes-service";
const logLevel = process.env.LOG_LEVEL || "debug";

const dbUrl = process.env.DB_URI || "mongodb://localhost:27017/jokes?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const variables = {
  env,
  host,
  port,
  name,
  logLevel,
  dbUrl
};

module.exports = variables;
