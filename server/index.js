const express = require('express')
const app = express()
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')
const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const ctrl = require('./controller')



app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT}, is now listening`))

