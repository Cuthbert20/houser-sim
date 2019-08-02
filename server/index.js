const express = require('express')
const app = express()
require('dotenv').config()
const massive = require('massive')
// const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const ctrl = require('./controller')



app.use(express.json())

//ENDPOINTS
app.get('/api/homes', ctrl.allHome)
app.post('/api/homes', ctrl.newHome)
app.delete('/api/homes/:id', ctrl.deleteHome)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT}, is now listening`))

}).catch(err => console.log('not accessing db'))


