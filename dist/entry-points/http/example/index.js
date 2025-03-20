"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_example_1 = require("@/domain/example/use-cases/get-example");
const example = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .get('/', { schema: {} }, async function (request, reply) {
        return (0, get_example_1.default)();
    });
};
exports.default = example;
//# sourceMappingURL=index.js.map