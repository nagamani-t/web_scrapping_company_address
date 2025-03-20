import { FastifySchema } from 'fastify'
import { readExampleResponseSchema } from '@/types/example.schema'

export const getUserFastifySchema: FastifySchema = {
  summary: 'Get all examples',
  tags: ['Example'],
  security: [{}],
  response: {
    200: readExampleResponseSchema
  }
}
