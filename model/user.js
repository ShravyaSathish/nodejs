const validateDate = require('validate-date')
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
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    mainaddress:[{
      address:{
        type: String,
        required: true
      }  
    }],
    maxaddress:{
      type: Number
    }   
})

const User = mongoose.model('User', userSchema)
module.exports = User