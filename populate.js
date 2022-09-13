
const mongoose = require('mongoose')
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/test4')

const user = new Schema({
    _id: Schema.Types.ObjectId,
    name:{
        type: String,
    },
    age:{
        type: Number
    },
    books:[{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
   
})
const posting = new Schema({
    author1: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type: String
    },
})
const User = mongoose.model('testing', user)
const post = mongoose.model('posting1', posting)

const author1 = new User({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
})
author1.save()

const post1 = new post({
    title:'halfg',
    author1: author1._id
})

post1.save()

post.
  findOne({ title: 'halfg' }).
  populate('author1').
  exec(function (err, s) {
    if (err) return handleError(err);
    console.log('The posted by %s', s.author1.name);
  });
// const u1 = new User({
//     name:'hstavh',
//     age: 21,
// })
// u1.save()

// const p = new post({
//     title:'shravya',
    
// })
// p.save()

// //  post.find().populate('postedBy').then(result=> console.log(result))
// // .catch(error =>console.log(error))

// const personSchema = Schema({
//     _id: Schema.Types.ObjectId,
//     name: String,
//     age: Number,
//     stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
//   });
  
//   const storySchema = Schema({
//     author: { type: Schema.Types.ObjectId, ref: 'Person' },
//     title: String,
//     fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
//   });
  
//   const Story = mongoose.model('Story', storySchema);
//   const Person = mongoose.model('Person', personSchema);

//   const author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
//   });
  
//   author.save(function (err) {
//     if (err) return handleError(err);
  
//     const story1 = new Story({
//       title: 'Casino Royale',
//       author: author._id    
//     });
  
//     story1.save(function (err) {
//       if (err) return handleError(err);

//     });
//   });


//   Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').
//   exec(function (err, story) {
//     if (err) return handleError(err);
//     console.log('The author is %s', story.author.name);
//     // prints "The author is Ian Fleming"
//   });