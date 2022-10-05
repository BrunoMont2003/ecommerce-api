import { Schema, model } from 'mongoose'

const PaymentSchema = new Schema({
  _type: String, // credit or debit,
  status: {
    type: String,
    default: 'pending' // pending or verified
  },
  card: {
    _type: String, // visa, mastercard, etc
    lastFourNumbers: String,
    expiryMonth: Number,
    expiryYear: Number,
    cvvVerify: Boolean
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model('Payment', PaymentSchema)
