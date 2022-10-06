import { Cart, Order } from '../models/index.js'

const createOrder = async (req, res) => {
  try {
    const order = await (
      await Order.create(req.body)
    ).populate('user', '-__v -password -role')
    // clean cart
    await Cart.findOneAndUpdate({ user: req.user.id }, { items: [] })
    return res
      .status(201)
      .json({ message: 'Order generated succesfully', order })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error while generating an order', error })
  }
}

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'firstName lastName email')
      .select('-__v')
      .sort({ date: -1 })
    return res.status(200).json({ orders })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error while fetching orders', error })
  }
}

export default {
  createOrder,
  getAllOrders
}
