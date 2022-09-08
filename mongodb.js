//CRUD Operation
const {MongoClient, ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error, client)=>{
    if(error){
        return console.log('Unable to connect!')
    }
    const db = client.db(databaseName)
    //inserting single document
    db.collection('User').insertOne({
        name:'Shravya',
        age:22,
        Course:'BE'
    }, (error, result)=>{
        if(error){
            return console.log('Unable to insert')
        }
         console.log(result)
    })
    //inserting multiple document
    db.collection('Users').insertMany([{
        name:'karthik',
        age:21,
    }, {
        name:'Shraddha',
        age:15
    }, {
        name:'Surya',
        age:21
    },{
        name:'jack',
        age:22
    },
    {
        name:'seni',
        age:45
    }
    ], (error, result)=>{
        if(error){
            return console.log('Unable to insert')
        }
        console.log(result)
    })
    //findOne - fetch the single document 
    db.collection('Users').findOne({age:22},(error, User)=>{
        if(error){
            console.log('Unable to fetch the data')
        }
        console.log(User)
    })
    //find-fetch the multiple document
    db.collection('Users').find({age:21}).limit(2).toArray((error, Users)=>{
        if(error){
            console.log('Unable to fetch the document')
        }
        console.log(Users)
    })
    //findOneAndUpdate - update single document
    db.collection('Users').findOneAndUpdate({age:45},{$set: {name:'Geetha'}},(error, Users)=>{
        if(error){
            console.log('Unable to fetch the document')
        }
        console.log(Users) 
    })
    //findOneAndDelete - deleting single document
     db.collection('User').findOneAndDelete({age:22},(error, User)=>{
        if(error){
            console.log('Unable to Delete Document')
        }
        console.log(User)
    })
    //updateOne - update document
    const updatePromise = db.collection('Users').updateOne({
        _id: new ObjectId("63182011709630a57019ef3e")
    },{
        $set:{name:'Mike'}
    })

    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    }) 
    //Incrementing age by 1 using $inc
    const updatePromise1 = db.collection('Users').updateOne({
        _id: new ObjectId("63182011709630a57019ef3e")
    },{
        $inc:{
            age:1
        }
    })
    updatePromise1.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    //deleteMany - delete multiple document
    db.collection('User').deleteMany({
        age:21
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    //$in
    db.collection('Users').find({name: {$in: ['karthik']}}).toArray((error, Users)=>{
        if(error){
            console.log('Unable to fetch the document')
        }
        console.log(Users)
    })

    //$in
    const updatein = db.collection('Users').update({name:{$in:['karthik']}},
    {$set:{
        age:23
    }}
    )
    updatein.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    //$unset
    const updateUnset = db.collection('Users').update({name:'Karthik'},{
        $unset:{
            age:23
        }
    })
    updateUnset.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})
