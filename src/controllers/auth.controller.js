import { User } from '../models/index.js'
import bcrypt from 'bcrypt'
const register = async (req, res) => {
  try {
    const encripted = await bcrypt.hash(req.body.password, 10)
    const user = await User.create({ ...req.body, password: encripted })
    user.password = undefined
    return res.status(201).json({
      message: 'User created successfully',
      user
    })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
const login = async (req, res) => {
  return res.status(200).json({
    message: 'User logged in successfully'
  })
}
export default {
  register,
  login
}
