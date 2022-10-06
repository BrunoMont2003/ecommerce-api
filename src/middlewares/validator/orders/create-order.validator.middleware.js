import {
  appendSubTotal,
  calculateOrderAmount
} from '../../../helpers/order.helper.js'
import { Cart } from '../../../models/index.js'
import { createOrderSchema } from '../../schemas/index.js'

const createOrderValidator = async (req, res, next) => {
  try {
    const { user } = req
    const cart = await Cart.findOne({ user: user.id }).populate(
      'items.product',
      '-stock -__v'
    )
    if (!cart) return res.status(404).json({ message: 'Cart is empty' })
    if (cart.items.length === 0) {
      return res.status(404).json({ message: 'Cart is empty' })
    }
    let items = cart.items
    items = appendSubTotal(items.map((item) => item.toJSON()))
    const amount = calculateOrderAmount(items)
    const value = await createOrderSchema.validateAsync({
      user: user.id,
      items,
      amount,
      date: new Date()
    })
    req.body = value
    next()
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Validation error while generating an order', error })
  }
}

export default createOrderValidator
