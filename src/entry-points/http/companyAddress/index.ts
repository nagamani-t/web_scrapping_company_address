
  
import { fetchCompanyAddress } from '@/data-access/companyAddress';
import { FastifyPluginAsyncTypebox, TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
  
  const example: FastifyPluginAsyncTypebox = async (
    fastify,
    opts
  ): Promise<void> => {
    fastify
      .withTypeProvider<TypeBoxTypeProvider>()
      .post('/', async function (request) {
       const companyAddress =  await fetchCompanyAddress(request)
        return companyAddress
      })
  }
  
  export default example