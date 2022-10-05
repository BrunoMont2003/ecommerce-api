import { Router } from 'express'
import { ProductController } from '../controllers/index.js'
import {
  AdminValidatorMiddleware,
  CreateProductValidatorMiddleware,
  ProductExistsMiddleware,
  UpdateProductValidatorMiddleware
} from '../middlewares/index.js'
const router = Router()

router
  .route('/products')
  .post(
    AdminValidatorMiddleware,
    CreateProductValidatorMiddleware,
    ProductController.createProduct
  )
  .get(ProductController.getProducts)

router
  .route('/products/:id')
  .get(ProductExistsMiddleware, ProductController.getProduct)
  .put(
    AdminValidatorMiddleware,
    ProductExistsMiddleware,
    UpdateProductValidatorMiddleware,
    ProductController.updateProduct
  )
  .delete(
    AdminValidatorMiddleware,
    ProductExistsMiddleware,
    ProductController.deleteProduct
  )

export default router
