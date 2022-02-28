const services = require("express").Router();
const home = require("./home");
const foo = require("./foo");

//swagger
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const docs = require("../swagger.js");

/*
 * Route: /api
 */

services.use("/", home);
services.use("/foo", foo);
services.use("/docs", docs);

module.exports = services;