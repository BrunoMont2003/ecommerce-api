import Joi from 'joi'

const createOrderSchema = Joi.object({
  user: Joi.string().required(),
  items: Joi.array()
    .items(
      Joi.object({
        product: Joi.object({
          _id: Joi.any().required(),
          name: Joi.string().required(),
          price: Joi.number().required(),
          provider: Joi.string().required(),
          description: Joi.string().required(),
          specs: Joi.object({
            color: Joi.string().required(),
            size: Joi.string().required(),
            width: Joi.number().required(),
            weight: Joi.number().required()
          }).required()
        }),
        quantity: Joi.number().required(),
        subtotal: Joi.number().required()
      })
    )
    .required(),
  amount: Joi.number().required(),
  date: Joi.date().required()
})

export default createOrderSchema
