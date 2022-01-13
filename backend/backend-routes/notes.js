const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const bodyParser = require('body-parser')

var urlencodeParser = bodyParser.urlencoded( { extended: false });
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

router.post('/', urlencodeParser, (req,res)=>{
    
    
        const note = new NotesDB({
            title: req.body[0],
            author: req.body[1],
            descriptons: req.body[2],
            picUrl: req.body[3],
            rating: req.body[4],
            year: req.body[5],
            isRead: req.body[6],
            genre: req.body[7],
        })
        console.log('new note, ', note)
    // note.save((error) => {
    //     if(error){console.log('error in new note: ', error)}
    //         res.status(200).end();
    // });
})

module.exports = router; 