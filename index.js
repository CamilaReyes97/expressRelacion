const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { connectToDB } = require('./db')

const app = express()
app.use(cors())
app.use(bodyParser.json())
connectToDB()


require('./routes/user')(app)

app.listen(3000, () => {
    console.log('Nos conectamos')
})
