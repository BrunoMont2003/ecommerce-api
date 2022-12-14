import express from 'express'
import morgan from 'morgan'
import {
  AdminValidatorMiddleware,
  AuthValidatorMiddleware,
  CustomerValidatorMiddleware
} from './middlewares/index.js'
import {
  AuthRoutes,
  UserRoutes,
  ProductRoutes,
  PaymentRoutes,
  CartRoutes,
  OrderRoutes
} from './routes/index.js'
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(AuthRoutes)
app.use(AuthValidatorMiddleware)
app.use('/users', AdminValidatorMiddleware)
app.use(UserRoutes)
app.use(ProductRoutes)
app.use('/payments', CustomerValidatorMiddleware)
app.use(PaymentRoutes)
app.use('/mycart', CustomerValidatorMiddleware)
app.use(CartRoutes)
app.use('/billing', CustomerValidatorMiddleware)
app.use('/myorders', CustomerValidatorMiddleware)
app.use(OrderRoutes)
export default app
