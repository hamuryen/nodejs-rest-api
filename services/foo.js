const foo = require("express").Router();
const result = require("../helper/result").result;
const send = require("../helper/result").send;

/*
 * Route: /api/foo
 */

/**
 * @swagger
 *
 * definitions:
 *   Foo:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - date
 *       - geom
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       date:
 *         type: number
 *       geom:
 *         type: object
 */

/**
 * @swagger
 *
 * /api/foo:
 *   post:
 *     description: foo service
 *     tags:
 *        - route
 *     parameters:
 *        - in: body
 *          name: foo
 *          required: true
 *          type: string
 *          schema:
 *              $ref: '#/definitions/Foo'
 *          description: The body
 *     produces:
 *       - application/json *
 *     responses:
 *       200:
 *         description: Response of foo service
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