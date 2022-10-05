import { updateProductSchema } from '../../schemas/index.js'
const updateProductValidator = async (req, res, next) => {
  try {
    await updateProductSchema.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Validation error occurred while updating product',
      error
    })
  }
}

export default updateProductValidator
