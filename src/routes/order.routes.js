import { Router } from 'express'
import { OrderController } from '../controllers/index.js'
import { CreateOrderValidatorMiddleware } from '../middlewares/index.js'
const router = Router()

router
  .route('/billing')
  .post(CreateOrderValidatorMiddleware, OrderController.createOrder)
router.route('/myorders').get(OrderController.getAllOrders)
export default router
