import { updatePaymentSchema } from '../../schemas/index.js'
const updateProductValidator = async (req, res, next) => {
  try {
    await updatePaymentSchema.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Validation error occurred while updating a payment method',
      error
    })
  }
}

export default updateProductValidator
