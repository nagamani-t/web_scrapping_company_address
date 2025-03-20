import { exampleModel } from './models/example.model'

const getExamples = async () => {
  exampleModel.find({})
}

const getExample = async (id: string) => {
  exampleModel.findById({ id })
}

export { getExample, getExamples }
