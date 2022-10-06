import { Payment } from '../models/index.js'

const createPayment = async (req, res) => {
  try {
    const { user } = req
    const data = {
      ...req.body,
      user: user.id
    }
    const payment = await Payment.create(data)
    return res.status(201).json({
      message: 'Payment created successfully',
      payment
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Payment creation failed',
      error
    })
  }
}

const getPayments = async (req, res) => {
  try {
    const { user } = req
    const payments = await Payment.find({
      user: user.id
    })
    return res.status(200).json({
      payments
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Payments fetching failed',
      error
    })
  }
}

const getPayment = async (req, res) => {
  try {
    const { user } = req
    const { id } = req.params
    const payment = await Payment.findOne({
      _id: id,
      user: user.id
    })
    return res.status(200).json({
      payment
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Payment fetching failed',
      error
    })
  }
}

const updatePayment = async (req, res) => {
  try {
    const { user } = req
    const { id } = req.params
    const payment = await Payment.findOneAndUpdate(
      {
        _id: id,
        user: user.id
      },
      req.body,
      {
        new: true
      }
    )
    return res.status(200).json({
      message: 'Payment updated successfully',
      payment
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Payment update failed',
      error
    })
  }
}

const deletePayment = async (req, res) => {
  try {
    const { user } = req
    const { id } = req.params
    const payment = await Payment.findOneAndDelete({
      _id: id,
      user: user.id
    })
    return res.status(200).json({
      message: 'Payment deleted successfully',
      payment
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Payment deletion failed',
      error
    })
  }
}

export default {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment
}
