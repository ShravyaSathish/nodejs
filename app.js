const express = require('express')
require('./db/mongoose')
const UserRouter = require('./router/user')
const port =process.PORT || 3000

const app = express()

app.use(express.json())

app.use(UserRouter)

app.listen(port, ()=>{
    console.log('Server is up on port')
})
