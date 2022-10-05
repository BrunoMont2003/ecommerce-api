import { User } from '../models/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'
import config from '../configs/general.config.js'

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
    return res.status(400).json({ error })
  }
}
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({ message: 'Invalid Credentials' })
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid Credentials' })
    }
    const token = jwt.encode({ id: user.id }, config.security.token.secret)
    return res.status(200).json({
      message: 'User logged in successfully',
      token
    })
  } catch (error) {
    return res.status(400).json({ error })
  }
}
export default {
  register,
  login
}
