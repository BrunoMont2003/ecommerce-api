import { Cart } from '../models/index.js'
const addItems = async (req, res) => {
  try {
    // if the cart is not found, create a new cart
    const { user } = req
    const { items } = req.body
    const cart = await Cart.findOne({
      user: user.id
    })
    if (!cart) {
      const newCart = await Cart.create({
        user: user.id,
        items
      })
      return res.status(201).json({
        message: 'Cart created successfully',
        cart: newCart
      })
    }
    // if the cart is found, update the cart
    const updatedCart = await Cart.findOneAndUpdate(
      {
        user: user.id
      },
      {
        $push: {
          items: {
            $each: items
          }
        }
      },
      {
        new: true
      }
    )
    return res.status(200).json({
      message: 'Cart updated successfully',
      cart: updatedCart
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Items addition to cart failed',
      error
    })
  }
}

export default {
  addItems
}
