import { createPaymentSchema } from '../../schemas/index.js'
const createProductValidator = async (req, res, next) => {
  try {
    await createPaymentSchema.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Validation error occurred while adding a payment method',
      error
    })
  }
}

export default createProductValidator
