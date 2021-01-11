"use strict";

require("dotenv").config();
const variables = require("./variables");

const Koa = require("koa");
const router = require("./routes");
const koaBody = require("koa-body");
const cors = require("koa2-cors");
const connectDB = require('./dbconnection');

connectDB.connect();

const app = new Koa();
app.use(koaBody());
app.use(cors({
  origin: '*'
}));

// Bootstrap application router
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
const server = app.listen(variables.port, () => {
  console.log(
    `API server listening on ${variables.host}:${variables.port}, in ${variables.env}`
  );
});

module.exports = server;
