
const mongoose = require('mongoose')
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/test4')

const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{
      type: Schema.Types.ObjectId, ref: 'Story' 
    }]
  });
  
  const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ 
      type: Schema.Types.ObjectId, ref: 'Person'
    }]
  });
  
  const Story = mongoose.model('Story', storySchema);
  const Person = mongoose.model('Person', personSchema);

  const author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Shravya',
    age: 50
  });
  
  author.save(function (err) {
    if (err) return handleError(err);
  
    const story1 = new Story({
      title: 'Half GirlFriend',
      author: author._id    
    });
  
    story1.save(function (err) {
      if (err) return handleError(err);

    });
  });
  Story.findOne({ title: 'Half GirlFriend' }).populate('author').exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author name is %s', story.author.name);
  });