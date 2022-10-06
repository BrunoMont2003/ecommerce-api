import { createCartSchema } from '../../schemas/index.js'

const createCartValidator = async (req, res, next) => {
  try {
    await createCartSchema.validateAsync(req.body)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Validation error while creating a shopping cart' })
  }
}

export default createCartValidator
