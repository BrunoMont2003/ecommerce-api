import Joi from 'joi'

const createUserSchema = Joi.object({
  role: Joi.valid('admin', 'customer').default('customer'),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone: Joi.string()
    .required()
    .pattern(/^[0-9]{9}$/),
  // if role is customer or not provided, then shippingAddress is required
  shippingAddress: Joi.when('role', {
    is: Joi.valid('customer'),
    then: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zip: Joi.string().required()
    }).required()
  })
})

export default createUserSchema
