import { Router } from 'express'
import { UserController } from '../controllers/index.js'
const router = Router()
router
  .route('/users')
  .get(UserController.getAllUsers)
router
  .route('/users/:id')
  .get(UserController.getUserById)
  .delete(UserController.deleteUser)
export default router
