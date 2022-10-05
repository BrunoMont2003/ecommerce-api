const config = {
  server: {
    port: process.env.PORT
  },
  app: {
    url: process.env.APP_URL
  },
  db: {
    uri: process.env.MONGO_URI
  }
}
export default config
