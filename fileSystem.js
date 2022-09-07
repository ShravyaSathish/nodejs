const fs = require('fs')

//Creating appl.txt file
fs.writeFile('app.txt','Im from Mangalore!!', (err)=>{
    if(err){
        console.log('error')
    }

})
//Reading txt file
fs.readFile('app.txt', 'utf8', (err, data)=>{
   if(err){
    console.log(err)
   }
   console.log(data)
})
//Rename file
fs.rename('app.txt', 'App.txt' , (err)=>{
    if(err){
        console.log(err)
    }
})

//Adding content 
fs.appendFile('App.txt', 'I live in karnataka', (err)=>{
    if(err){
        console.log(err)
    }
})
//fs.access => is used to check the permission to access the file
fs.access('App.txt', fs.constants.R_OK, (err)=>{
    console.log('Checking for permission to access file')
    if(err){
        console.log(err)
    }else{
        console.log('Files can be Read')
    }
})
//Open the file
fs.open('App.txt', 'r', (err)=>{
   if(err){
    console.log(err)
   }
   console.log('Saved!!!')
})