import { Payment } from '../../../models/index.js'
const verifyPaymentValidator = async (req, res, next) => {
  try {
    const {
      user: { id }
    } = req
    const payments = await Payment.find({ user: id })
    // if the user does not have a payment method, return an error
    if (!payments.length) {
      return res.status(402).json({
        error: 'You have not added a payment method yet'
      })
    }
    // if the paymenth method is not verified, return an error
    if (payments[0].status !== 'verified') {
      return res.status(402).json({
        error: 'Your payment method has not been verified yet'
      })
    }
    // if the cvv is not verified, return an error
    if (!payments[0].card.cvvVerified) {
      return res.status(402).json({
        error: 'The cvv is not verified'
      })
    }
    next()
  } catch (error) {
    return res.status(400).json({ message: 'Error verifying payment', error })
  }
}

export default verifyPaymentValidator
