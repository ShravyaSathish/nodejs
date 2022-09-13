const express = require('express')
const router = express.Router()
const User = require('../model/user')


router.post('/users', async(req, res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.send(user)
    }
    catch(e){
        res.send('Failed to save data')
    }
})

router.get('/users/profile', async(req, res)=>{
    try{
        res.send(req.User)
    }catch(e){
        res.status(400).send('Unable to get User')
    }
})
module.exports = router