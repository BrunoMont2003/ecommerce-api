import { Router } from 'express'
import { AuthController } from '../controllers/index.js'
import { CreateUserValidatorMiddleware, LoginValidatorMiddleware } from '../middlewares/index.js'
const router = Router()
router.post('/register', CreateUserValidatorMiddleware, AuthController.register)
router.post('/login', LoginValidatorMiddleware, AuthController.login)
export default router
