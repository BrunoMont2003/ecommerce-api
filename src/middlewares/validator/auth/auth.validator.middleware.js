import config from '../../../configs/general.config.js'
import jwt from 'jwt-simple'
import User from '../../../models/User.js'
const authValidator = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({ msg: 'Auth token not found' })
  }
  try {
    const payload = jwt.decode(token, config.security.token.secret)
    const { id } = payload
    const user = await User.findById(id)
    if (!user) return res.status(401).json({ msg: 'Invalid token' })

    req.user = payload
    next()
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid token' })
  }
}
export default authValidator
