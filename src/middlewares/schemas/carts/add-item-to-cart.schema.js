import joi from 'joi'

const addItemToCartSchema = joi.object({
  product: joi.string().required(),
  quantity: joi.number().required()
})

export default addItemToCartSchema
