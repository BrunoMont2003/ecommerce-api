import { Router } from 'express'
import { AuthController } from '../controllers/index.js'
import { UserValidatorMiddleware } from '../middlewares/index.js'
const router = Router()
router.post('/register', UserValidatorMiddleware, AuthController.register)
export default router
