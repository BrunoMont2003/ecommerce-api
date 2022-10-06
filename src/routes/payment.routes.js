import { Router } from 'express'
import { PaymentController } from '../controllers/index.js'
import {
  CreatePaymentValidatorMiddleware,
  PaymentExistsMiddleware,
  UpdatePaymentValidatorMiddleware
} from '../middlewares/index.js'
const router = Router()

router
  .route('/payments')
  .post(CreatePaymentValidatorMiddleware, PaymentController.createPayment)
  .get(PaymentController.getPayments)

router
  .route('/payments/:id')
  .get(PaymentExistsMiddleware, PaymentController.getPayment)
  .put(
    PaymentExistsMiddleware,
    UpdatePaymentValidatorMiddleware,
    PaymentController.updatePayment
  )
  .delete(PaymentExistsMiddleware, PaymentController.deletePayment)
export default router
