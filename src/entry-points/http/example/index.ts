import {
  TypeBoxTypeProvider,
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'

import getExample from '@/domain/example/use-cases/get-example'

const example: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get('/', { schema: {} }, async function (request, reply) {
      return getExample()
    })
}

export default example
