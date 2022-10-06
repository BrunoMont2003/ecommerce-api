import CreateUserValidatorMiddleware from './validator/auth/create-user.validator.middleware.js'
import CreateProductValidatorMiddleware from './validator/products/create-product.validator.middleware.js'
import UpdateProductValidatorMiddleware from './validator/products/update-product.validator.middleware.js'
import LoginValidatorMiddleware from './validator/auth/login.validator.middleware.js'
import AuthValidatorMiddleware from './validator/auth/auth.validator.middleware.js'
import AdminValidatorMiddleware from './validator/auth/admin.validator.middleware.js'
import CustomerValidatorMiddleware from './validator/auth/customer.validator.middleware.js'
import ProductExistsMiddleware from './validator/products/product-exists.validator.middleware.js'
import CreatePaymentValidatorMiddleware from './validator/payments/create-payment.validator.middleware.js'
import UpdatePaymentValidatorMiddleware from './validator/payments/update-payment.validator.middleware.js'
import PaymentExistsMiddleware from './validator/payments/payment-exists.validator.middleware.js'
import addItemToCartValidatorMiddleware from './validator/carts/add-item-to-cart.validator.middleware.js'
export {
  CreateUserValidatorMiddleware,
  CreateProductValidatorMiddleware,
  UpdateProductValidatorMiddleware,
  LoginValidatorMiddleware,
  AuthValidatorMiddleware,
  AdminValidatorMiddleware,
  CustomerValidatorMiddleware,
  ProductExistsMiddleware,
  CreatePaymentValidatorMiddleware,
  UpdatePaymentValidatorMiddleware,
  PaymentExistsMiddleware,
  addItemToCartValidatorMiddleware
}
