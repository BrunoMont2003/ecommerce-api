import express from 'express'
import { AdminValidatorMiddleware, AuthValidatorMiddleware } from './middlewares/index.js'
import { AuthRoutes, UserRoutes } from './routes/index.js'
const app = express()
app.use(express.json())
app.use(AuthRoutes)
app.use(AuthValidatorMiddleware)
app.use(UserRoutes, AdminValidatorMiddleware)

export default app
