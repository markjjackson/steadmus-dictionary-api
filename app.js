// Import dependencies
const express = require('express')
const mongo = require('mongodb')
const { constructDbUri } = require('./util/db')

// Import environment variables
require('dotenv').config()

// Create express app
const app = express()

// Define routes
app.get('/', (req, res) => {
  res.send('Studeamus dictionary app')
})

// Run app
app.listen(process.env.APP_PORT, () => {
  console.log(`App listening on port ${process.env.APP_PORT}`)
})
