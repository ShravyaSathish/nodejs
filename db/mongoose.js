const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const { array } = require('yargs');
mongoose.connect('mongodb://localhost:27017/test1')

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
      } 
    }],   
})

const User = mongoose.model('User1', userSchema)
const user = new User({
    firstName:'ABCDFSG',
    lastName:"salian",
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


// User.findOneAndUpdate({firstName:"Preksha"},{$push:{address:"syuuh"}
// },(error, User1)=>{
//     if(error){
//         console.log('error')
//     }
//     console.log(User1)
// })



// User.findOne({firstName:"Shreya"},(error, User1)=>{
//     if(error){
//         console.log('Unable to fetch')
//     }
//     console.log(User1)
// })



// User.updateOne({firstName: "ABCDFSG"}, {$push: {mainaddress:{address: "Harry"}}}, {runValidators:true}, (error, User1)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(User1)
// })

// // const count = User.find({ user:req.User1._id}).count()
// // if(count>5){
// //     res.status(400).send('Maximum limit Recahed')
// // }
// // console.log(user.req.User1)


// User.deleteOne({
//     lastName: "poojaryy"
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


//populate
const postSchema = new Schema({
    title:'String',
})
const Post = mongoose.model('posts', postSchema);
const post = new Post({
    title:'sghhjhjh',
})
post.save()
Post.find().populate("postedby").then(p=>console.log(p)).catch(error=>console.log(error));



// const post = new Post(
//     {
//         title:'shravyartu'
//     }
// )

// post.save()
// Post.find()
// .populate("postedBy")
// .then(p=>console.log(p))
// .catch(error=>console.log(error));



