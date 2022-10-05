import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  name: String,
  price: Number,
  specs: {
    color: String,
    size: String,
    weight: Number,
    width: Number
  },
  stock: Number,
  provider: String,
  description: String
})

export default model('Product', ProductSchema)
