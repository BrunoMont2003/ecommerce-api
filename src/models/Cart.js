import { Schema, model } from 'mongoose'

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        default: 1
      },
      _id: false
    }
  ]
})

export default model('Cart', CartSchema)
