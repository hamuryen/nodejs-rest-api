const docs = require('express').Router();

//swagger
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const DisableTryItOutPlugin = function () {
    return {
        statePlugins: {
            spec: {
                wrapSelectors: {
                    allowTryItOutFor: () => () => false
                }
            }
        }
    }
}

const options = {
    apis: ['./services/foo.js', './services/home.js'],
    basePath: '/',
    swaggerDefinition: {
        info: {
            description: 'ModeJS Rest API docs',
            swagger: '2.0',
            title: 'ModeJS Rest API',
            contact: {
                name: "Burak Hamuryen",
                url: "https://hamuryen.com",
                email: "burak@hamuryen.com"
            }
        }
    }
};

const options2 = {
    swaggerOptions: {
        plugins: [
            DisableTryItOutPlugin
        ]
    },
    explorer: true
};

const specs = swaggerJsdoc(options);
docs.use("/", swaggerUi.serve);
docs.get("/", swaggerUi.setup(specs, options2));

module.exports = docs;