"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .get('/', { schema: {} }, async function (request, reply) {
        return { root: true };
    });
};
exports.default = root;
//# sourceMappingURL=root.js.map