import {
    TypeBoxTypeProvider,
    FastifyPluginAsyncTypebox
  } from '@fastify/type-provider-typebox'
  
import { fetchCompanyAddress } from '@/data-access/companyAddress'
  
  const example: FastifyPluginAsyncTypebox = async (
    fastify,
    opts
  ): Promise<void> => {
    fastify
      .withTypeProvider<TypeBoxTypeProvider>()
      .post('/', async function (request, reply) {
       const companyAddress =  await fetchCompanyAddress(request)
        return companyAddress
      })
  }
  
  export default example