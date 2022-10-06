import { Product } from '../models/index.js'

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    return res.status(201).json({
      message: 'Product created successfully',
      product
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Product creation failed',
      error
    })
  }
}

const getProducts = async (req, res) => {
  try {
    const { name, sortBy, minPrice, maxPrice, provider } = req.query
    const { role } = req.user
    const query = {}
    if (name) {
      query.name = { $regex: name, $options: 'i' }
    }
    if (minPrice) {
      query.price = { $gte: minPrice }
    }
    if (maxPrice) {
      query.price = { $lte: maxPrice }
    }
    if (provider) {
      query.provider = { $regex: provider, $options: 'i' }
    }
    if (role === 'admin') {
      const products = await Product.find(query).sort(sortBy)
      return res.status(200).json({
        products
      })
    }
    query.stock = { $gt: 0 }
    const products = await Product.find(query).sort(sortBy).select('-stock')

    return res.status(200).json({
      products
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Products retrieval failed',
      error
    })
  }
}

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    return res.status(200).json({
      product
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Product retrieval failed',
      error
    })
  }
}

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.status(200).json({
      message: 'Product updated successfully',
      product
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Product update failed',
      error
    })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      message: 'Product deleted successfully',
      product
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Product deletion failed',
      error
    })
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
}
