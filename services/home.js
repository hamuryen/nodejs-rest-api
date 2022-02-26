const home = require('express').Router();
const result = require("../helper/result").result;
const send = require("../helper/result").send;

/*
* Route: /api/home
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

home.get('/home', (req, rep) => {
    result({ version: process.env.VERSION })
        .then((res) => {
            return send(rep, res);
        })
        .catch((err) => {
            console.error('home service, err: ', err);
        });
});

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