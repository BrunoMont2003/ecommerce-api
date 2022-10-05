import { User } from '../models/index.js'
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password')
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(400).json({
      message: 'Error getting users',
      error
    })
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user })
    }
    return res
      .status(404)
      .json({ message: 'User with the specified ID does not exists' })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id).lean()
    if (!user) {
      return res
        .status(404)
        .json({ message: 'User with the specified ID does not exists' })
    }
    return res.status(200).json({
      message: 'User deleted successfully',
      user: { ...user, password: undefined }
    })
  } catch (error) {
    return res.status(400).json({
      message: 'Error deleting user',
      error
    })
  }
}

export default {
  getAllUsers,
  getUserById,
  deleteUser
}
