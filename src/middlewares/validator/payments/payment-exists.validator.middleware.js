import { Payment } from '../../../models/index.js'

const paymentExistsValidator = async (req, res, next) => {
  try {
    const { id } = req.params
    const payment = await Payment.findById(id)
    if (!payment) return res.status(404).json({ message: 'payment not found' })
    next()
  } catch (error) {
    res.status(400).json({
      message: 'Something went wrong',
      error
    })
  }
}

export default paymentExistsValidator
