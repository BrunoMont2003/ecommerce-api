import { Cart } from '../models/index.js'
const addItem = async (req, res) => {
  try {
    const { product, quantity } = req.body
    const { user } = req
    const cart = await Cart.findOne({ user: user._id })
    if (cart) {
      const item = cart.items.find(
        (item) => item.product.toString() === product
      )
      if (item) item.quantity += quantity
      else cart.items.push({ product, quantity })
      await cart.save()
      return res.status(200).json({
        message: 'Item added to cart',
        cart
      })
    }
    const newCart = new Cart({
      user: user._id,
      items: [{ product, quantity }]
    })
    await newCart.save()
    return res.status(200).json({
      message: 'Item added to cart',
      cart: newCart
    })
  } catch (error) {
    return res.status(400).json({ message: 'Error adding item to cart', error })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { product } = req.params
    const { user } = req
    const cart = await Cart.findOne({ user: user._id })
    if (cart) {
      const item = cart.items.find((item) => {
        return item.product.toString() === product
      })
      if (item) {
        const newItems = cart.items.filter(
          (item) => item.product.toString() !== product
        )
        cart.items = newItems
        await cart.save()
        return res.status(200).json({
          message: 'Item deleted from cart',
          cart
        })
      }
      return res.status(400).json({
        message: 'Item not found in cart'
      })
    }
    return res.status(400).json({
      message: 'Cart not found'
    })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error deleting item from cart', error })
  }
}
const deleteAllItems = async (req, res) => {
  try {
    const { user } = req
    const cart = await Cart.findOne({ user: user._id })
    if (cart) {
      cart.items = []
      await cart.save()
      return res.status(200).json({
        message: 'Cart cleared',
        cart
      })
    }
    return res.status(400).json({
      message: 'Cart not found'
    })
  } catch (error) {
    return res.status(400).json({ message: 'Error clearing cart', error })
  }
}

const getAllItems = async (req, res) => {
  try {
    const { user } = req
    const cart = await Cart.findOne({ user: user._id }).populate(
      'items.product',
      'name price provider'
    ).select('-_id')
    if (cart) {
      return res.status(200).json({
        cart
      })
    }
    return res.status(200).json({
      message: 'The Cart is empty'
    })
  } catch (error) {
    return res.status(400).json({ message: 'Error getting cart', error })
  }
}

export default {
  addItem,
  deleteProduct,
  getAllItems,
  deleteAllItems
}
