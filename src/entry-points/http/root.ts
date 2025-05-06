import { FastifyPluginAsyncTypebox, TypeBoxTypeProvider } from "@fastify/type-provider-typebox"

const root: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get('/', { schema: {} }, async function (request, reply) {
      return { root: true }
    })
}

export default root
