import { Router } from 'express'
import { CartController } from '../controllers/index.js'
import { addItemToCartValidatorMiddleware } from '../middlewares/index.js'
const router = Router()

router
  .route('/mycart')
  .post(addItemToCartValidatorMiddleware, CartController.addItem)
  .get(CartController.getAllItems)
  .delete(CartController.deleteAllItems)
router.route('/mycart/:product').delete(CartController.deleteProduct)
export default router
