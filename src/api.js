import express from 'express'
import { UserRoutes } from './routes/index.js'
const app = express()
app.use(express.json())
app.use(UserRoutes)
app.get('/ping', (req, res) => {
  res.send({
    message: 'pong'
  })
})

export default app
