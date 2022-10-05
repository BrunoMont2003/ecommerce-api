import { Router } from 'express'
import { UserController } from '../controllers/index.js'
import { UserValidatorMiddleware } from '../middlewares/index.js'
const router = Router()
router.post('/register', UserValidatorMiddleware, UserController.register)
export default router
