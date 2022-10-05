import Joi from 'joi'
const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
  stock: Joi.number().optional(),
  specs: Joi.object({
    color: Joi.string().required(),
    size: Joi.any().required(),
    weight: Joi.number().required(),
    width: Joi.number().required()
  }).optional(),
  provider: Joi.string().optional()
})

export default updateProductSchema
