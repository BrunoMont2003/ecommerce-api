import joi from 'joi'

const createCartSchema = joi.object({
  items: joi.array().items(
    joi.object({
      product: joi.string().required(),
      quantity: joi.number().required()
    })
  )
})

export default createCartSchema
