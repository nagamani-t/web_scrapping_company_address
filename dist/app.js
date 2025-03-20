"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.app = void 0;
const path_1 = require("path");
const autoload_1 = require("@fastify/autoload");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
require("module-alias/register");
const dotenv = require("dotenv");
dotenv.config();
const options = {};
exports.options = options;
const app = async (fastify, opts) => {
    void fastify.setValidatorCompiler(type_provider_typebox_1.TypeBoxValidatorCompiler);
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'plugins'),
        options: opts
    });
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, './entry-points/http/'),
        options: opts
    });
};
exports.app = app;
exports.default = app;
//# sourceMappingURL=app.js.map