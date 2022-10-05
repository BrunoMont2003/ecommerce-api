import { loginSchema } from '../../schemas/index.js'
const loginValidator = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Validation error occurred on login',
      error
    })
  }
}

export default loginValidator
