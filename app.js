const express = require('express')
const app = express()
app.use(express.json())

const port =process.PORT || 3000
app.post('/hi', (req, res)=>{
    res.send('Got a POST request')
})

app.listen(port, ()=>{
    console.log('Server is up on port')
})
