// Import dependencies
const express = require('express')
const mongo = require('mongodb')
const { constructDbUri } = require('./util/db')

// Import environment variables
require('dotenv').config()
const { env } = process

// Create express app
const app = express()

// Middleware

// Configure CORS is desired (included in .env)
if (env.APP_CORS_ORIGIN && env.APP_CORS_HEADERS) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', env.APP_CORS_ORIGIN)
    res.header("Access-Control-Allow-Headers", env.APP_CORS_HEADERS)
  })
}

// Define routes
app.get('/', (req, res) => {
  res.send('Studeamus dictionary app')
})

// Run app
app.listen(env.APP_PORT, () => {
  console.log(`App listening on port ${env.APP_PORT}`)
})