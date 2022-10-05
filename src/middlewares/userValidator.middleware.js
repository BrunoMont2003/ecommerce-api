import { createUserSchema } from './schemas/index.js'
const createUserValidator = async (req, res, next) => {
  try {
    await createUserSchema.validateAsync(req.body)
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Validation error occurred while registering user',
      error
    })
  }
}

export default createUserValidator
