import { createProductSchema } from '../../schemas/index.js'
const createProductValidator = async (req, res, next) => {
  try {
    await createProductSchema.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Validation error occurred while creating product',
      error
    })
  }
}

export default createProductValidator
