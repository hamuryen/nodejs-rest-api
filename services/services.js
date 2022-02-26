const services = require("express").Router();
const home = require("./home");
const foo = require("./foo");

/*
 * Route: /api
 */

services.use("/", home);
services.use("/foo", foo);

module.exports = services;