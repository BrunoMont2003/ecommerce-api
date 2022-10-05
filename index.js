import { createServer } from 'http'
import app from './src/api.js'
import config from './src/configs/general.config.js'
import connect from './src/configs/db.config.js'
const server = createServer(app)

server.on('listening', () => {
  console.info(`Server is listening on port ${server.address().port}`)
})
server.on('error', (e) => {
  console.error('Error executing the server 😡')
  if (e.code === 'EADDRINUSE') {
    console.error(`Port ${e.port} is already in use`)
  }
})
connect()
server.listen(config.server.port)
