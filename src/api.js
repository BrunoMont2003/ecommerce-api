import express from 'express'
import {
  AdminValidatorMiddleware,
  AuthValidatorMiddleware
} from './middlewares/index.js'
import { AuthRoutes, UserRoutes, ProductRoutes } from './routes/index.js'
const app = express()
app.use(express.json())
app.use(AuthRoutes)
app.use(AuthValidatorMiddleware)
app.use(UserRoutes, AdminValidatorMiddleware)
app.use(ProductRoutes)

export default app
