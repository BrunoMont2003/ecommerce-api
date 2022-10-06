import { Schema, model } from 'mongoose'

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  items: [
    {
      product: {
        name: String,
        price: Number,
        specs: {
          color: String,
          size: String,
          weight: Number,
          width: Number
        },
        provider: String,
        description: String
      },
      quantity: {
        type: Number,
        default: 1
      },
      subtotal: {
        type: Number,
        default: 0
      },
      _id: false
    }
  ],
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

export default model('Order', OrderSchema)
