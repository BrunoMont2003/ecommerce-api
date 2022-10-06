import Joi from 'joi'

const createPaymentSchema = Joi.object({
  _type: Joi.string().required().valid('credit', 'debit'),
  status: Joi.string().required().valid('pending', 'verified'),
  card: Joi.object({
    _type: Joi.string().required().valid('visa', 'mastercard'),
    lastFourNumbers: Joi.string().length(4).required(),
    expiryMonth: Joi.number().min(1).max(12).required(),
    expiryYear: Joi.number().min(2021).max(2030).required(),
    cvvVerified: Joi.boolean().required()
  }).required()
})

export default createPaymentSchema
