import Joi from 'joi'

const createPaymentSchema = Joi.object({
  _type: Joi.string().optional().valid('credit', 'debit'),
  status: Joi.string().optional().valid('pending', 'verified'),
  card: Joi.object({
    _type: Joi.string().optional().valid('visa', 'mastercard'),
    lastFourNumbers: Joi.string().length(4).optional(),
    expiryMonth: Joi.number().min(1).max(12).optional(),
    expiryYear: Joi.number().min(2021).max(2030).optional(),
    cvvVerified: Joi.boolean().optional()
  }).optional()
})

export default createPaymentSchema
