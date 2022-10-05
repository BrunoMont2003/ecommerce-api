import Joi from 'joi'

const createUserSchema = Joi.object({
  role: Joi.string().valid('customer', 'admin').default('customer'),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^[0-9]{9}$/)
    .when('role', {
      is: Joi.valid('customer'),
      then: Joi.required()
    }),
  // if role is customer or not provided, then shippingAddress is required
  shippingAddress: Joi.when('role', {
    is: Joi.valid('customer'),
    then: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      country: Joi.string().required(),
      province: Joi.string().required(),
      zip: Joi.string().required()
    }).required(),
    otherwise: Joi.forbidden()
  })
})

export default createUserSchema
