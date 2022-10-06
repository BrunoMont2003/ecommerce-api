import { Product } from '../../../models/index.js'

const productExistsValidator = async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) return res.status(404).json({ message: 'Product not found' })
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Something went wrong',
      error
    })
  }
}

export default productExistsValidator
