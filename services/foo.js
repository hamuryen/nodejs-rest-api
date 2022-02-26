const foo = require("express").Router();
const result = require("../helper/result").result;
const send = require("../helper/result").send;

/*
 * Route: /api/foo
 */

foo.post("/", (req, rep) => {
  const m = req.body;
  console.log(m);
  var response = "OK"
  result(response, response == null ? -1 : 0, null)
    .then((res) => {
      send(rep, res);
    });
});

module.exports = foo;