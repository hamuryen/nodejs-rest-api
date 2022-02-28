const home = require('express').Router();
const result = require("../helper/result").result;
const send = require("../helper/result").send;

/*
* Route: /api/home
*/

/**
 * @swagger
 *
 * /api:
 *   get:
 *     description: Home
 *     tags:
 *        - home
 *     produces:
 *       - application/json *   
 *     responses:
 *       200:
 *         description: Home
 */
home.get('/', (req, rep) => {
    result({ version: process.env.VERSION })
        .then((res) => {
            return send(rep, res);
        })
        .catch((err) => {
            console.error('home service root, err: ', err);
        });
});

/**
 * @swagger
 *
 * /api/home:
 *   get:
 *     description: Home
 *     tags:
 *        - home
 *     produces:
 *       - application/json *   
 *     responses:
 *       200:
 *         description: Home
 */
home.get('/home', (req, rep) => {
    result({ version: process.env.VERSION })
        .then((res) => {
            return send(rep, res);
        })
        .catch((err) => {
            console.error('home service, err: ', err);
        });
});

/**
 * @swagger
 *
 * /api/version:
 *   get:
 *     description: Get version
 *     tags:
 *        - home
 *     produces:
 *       - application/json *   
 *     responses:
 *       200:
 *         description: Get version
 */
home.get('/version', (req, rep) => {
    result({ version: process.env.VERSION })
        .then((res) => {
            return send(rep, res);
        })
        .catch((err) => {
            console.error('version service, err: ', err);
        });
});

module.exports = home;