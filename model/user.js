const validateDate = require('validate-date')
const mongoose = require('mongoose')
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
        trim: true,
        validate(value){
            if(!validateDate(value, responseType="boolean", dateFormat="yyyy/mm/dd")){
                throw new Error('Invalid Date')
            }
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email! Please Enter valid Email')
            }
        }
    },
    password:{
        type: String,
        required: true,
        //unique: true
    },
    mainaddress:[{
      address:{
        type: String,
        required: true
      }  
    }],
     
})

const User = mongoose.model('User1', userSchema)
//module.exports = User

const user = new User({
    firstName:'Shreya',
    lastName:"poojaryy",
    phoneNumber:4561789345,
    dateOfbirth:"24/08/1990",
    email:"shreya@gmail.com",
    password:"ertyui",
    mainaddress:[{
        address:"mangalore"
    }]
})

user.save().then(()=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
})