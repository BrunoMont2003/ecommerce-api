import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()

app.use(express.json())
app.get('/ping', (req, res) => {
  res.send({
    message: 'pong'
  })
})

export default app
