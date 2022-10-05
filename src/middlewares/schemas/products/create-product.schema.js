import Joi from 'joi'
const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
  specs: Joi.object({
    color: Joi.string().optional(),
    size: Joi.any().optional(),
    weight: Joi.number().required(),
    width: Joi.number().required()
  }),
  provider: Joi.string().required()
})

export default createProductSchema
