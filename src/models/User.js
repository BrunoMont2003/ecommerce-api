import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  role: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: String,
  shippingAddress: {
    country: String,
    city: String,
    province: String,
    street: String,
    zip: String
  }
})

export default model('User', UserSchema)
