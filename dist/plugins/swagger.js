"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const swagger_1 = require("@fastify/swagger");
const swagger_ui_1 = require("@fastify/swagger-ui");
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.register(swagger_1.default, {
        openapi: {
            info: {
                title: 'PPI Admin Backend API',
                description: '',
                version: '0.1.0'
            },
            servers: [
                {
                    url: 'http://localhost:4200'
                }
            ]
        },
        hideUntagged: false
    });
    fastify.register(swagger_ui_1.default);
});
//# sourceMappingURL=swagger.js.map