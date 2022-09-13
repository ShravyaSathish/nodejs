const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { array } = require('yargs');
mongoose.connect('mongodb://localhost:27017/test2')

const { Schema } = mongoose;
const userSchema = new Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    phoneNumber:{
        type: Number
    },
    dateOfbirth:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    mainaddress:[{
      address:{
        type: String,
        required: true,
        max: 2
      } 
    }],   
})

const User = mongoose.model('User2', userSchema)


//Inserting Document
const user = new User({
    firstName:'keerthika',
    lastName:"nayak",
    phoneNumber:4561781444,
    dateOfbirth:"18/11/2000",
    email:"thanush@gmail.com",
    password:"eyuioj",
    mainaddress:[{
        address:"pan" 
    }]
})
user.save().then(()=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})

//update - inserting multiple address
User.updateOne({firstName: "keerthika"}, {$push: {mainaddress:{address: "puhur"}}}, (error, User2)=>{
    if(error){
        console.log(error)
    }
    console.log(User2)
})

//Update Address - deleting address
User.updateOne({firstName:"keerthika"}, {$pull:{mainaddress:{address:"puhur"}}},(error, User2)=>{
    if(error){
        console.log(error)
    }
    console.log(User2)
})

// //DeleteOne document
User.deleteOne({
    lastName: "salian"
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

// //findOne
User.find({firstName:'Shravya'}).then((error,User2)=>{
    if(error){
        console.log(error)
    }
    console.log(User2)
})

//deleting document by id
User.findByIdAndDelete({_id: new ObjectId('6320682339a0cbe0a45f8b79')}, (error, User2)=>{
    if(error){
        console.log(error)
    }
    console.log(User2)
})