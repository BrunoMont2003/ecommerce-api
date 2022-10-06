import { addItemToCartSchema } from '../../schemas/index.js'

const addItemToCartValidator = async (req, res, next) => {
  try {
    await addItemToCartSchema.validateAsync(req.body)
    next()
  } catch (error) {
    return res
      .status(400)
      .json({
        message: 'Validation error while adding  item to a shopping cart',
        error
      })
  }
}

export default addItemToCartValidator
