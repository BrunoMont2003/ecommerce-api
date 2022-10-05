import CreateUserValidatorMiddleware from './validator/auth/create-user.validator.middleware.js'
import CreateProductValidatorMiddleware from './validator/products/create-product.validator.middleware.js'
import UpdateProductValidatorMiddleware from './validator/products/update-product.validator.middleware.js'
import LoginValidatorMiddleware from './validator/auth/login.validator.middleware.js'
import AuthValidatorMiddleware from './validator/auth/auth.validator.middleware.js'
import AdminValidatorMiddleware from './validator/auth/admin.validator.middleware.js'
import ProductExistsMiddleware from './validator/products/product-exists.validator.middleware.js'
export {
  CreateUserValidatorMiddleware,
  CreateProductValidatorMiddleware,
  UpdateProductValidatorMiddleware,
  LoginValidatorMiddleware,
  AuthValidatorMiddleware,
  AdminValidatorMiddleware,
  ProductExistsMiddleware
}
