"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const companyAddress_1 = require("@/data-access/companyAddress");
const example = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .post('/company-address', async function (request, reply) {
        const companyAddress = await (0, companyAddress_1.fetchCompanyAddress)(request);
        return companyAddress;
    });
};
exports.default = example;
//# sourceMappingURL=index.js.map