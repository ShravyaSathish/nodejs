//Getting input from the user
const express = require('express')
const yargs = require('yargs')

// const command = process.argv[2]

// console.log(process.argv)


// if(command === 'add'){
//     console.log('Adding date')
// }else  if(command == 'remove'){
//     console.log('Removing data')
// }


/// Argument parsing with yargs
//Yargs -> Helps to build interactive command line tools


//customizing yargs
yargs.version('1.1.0')
// add, remove, read, list

//Create Add command 
 yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            title:'Adding title!'
        }
    },
    handler: ()=>{
        console.log('Adding a new note')
    }
 })
 //Removing a note
 yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: ()=>{
        console.log('Removing a note')
    }
 })

//Reading a note
yargs.command({
    command:'read',
    describe:'Reading a note',
    handler:()=>{
        console.log('Reading a note')
    }
})
//Listing note
yargs.command({
    command:'list',
    describe:'listing a note',
    handler:()=>{
        console.log('listing out note')
    }
})
console.log(yargs.argv)