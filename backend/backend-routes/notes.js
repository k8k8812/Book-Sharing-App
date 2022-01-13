const express = require('express');
const router = express.Router();


//get my mongoose model setup; 
const NotesDB = require('../models/notes'); 

router.get('/', (req,res)=>{
    NotesDB.find({}, (error, notes) => {
        if(error){
         console.log("error !!!!!!! ", error);
        }
        console.log('so...it should work, ')
        res.json(notes);
        
    });
})

module.exports = router; 