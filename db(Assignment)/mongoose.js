//Assignment
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
        validate: [arrayLimit, ' exceeds the limit of 10']
      },
   
    }],    
})

function arrayLimit(mainaddress) {
    return mainaddress.length <3;
}

const User = mongoose.model('User2', userSchema)
//Inserting Document
const user = new User({
    firstName:'saniya',
    lastName:"salian",
    phoneNumber:4561781444,
    dateOfbirth:"18/11/2000",
    email:"karthik@gmail.com",
    password:"eyuioj",
    mainaddress:[{
        address:"dairyy" 
    }],
})
user.save().then(()=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})


//update - inserting multiple address
User.updateOne({firstName: "saniya"}, {$push: {mainaddress:{address: "puhur"}}},{new: true}, (error, User2)=>{
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

//findOne
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

//Updating single address
User.updateOne({'mainaddress._id':"6321ac5fb56a476a21133e44"},{
    $set: {
        'mainaddress.$.address': "xhjsjk"}}
    ,(error, User2)=>{
    if(error){
        console.log('Error')
    }
    console.log(User2)
});

//Delete one address
const _id =  ObjectId("6321ac5fb56a476a21133e43")
User.findByIdAndUpdate(_id , {$pull:{'mainaddress':{_id:'6321ac89ac63cc37d75e4d94'}}},(error, User2)=>{
    if(error){
        console.log('Error')
    }
    console.log(User2)
})
