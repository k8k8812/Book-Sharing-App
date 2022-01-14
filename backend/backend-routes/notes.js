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

    console.log(req.body);
    // console.log(req.body.title);
    // console.log(req.body.descriptions);

        const note = new NotesDB({
            title: req.body.title,
            author: req.body.author,
            descriptions: req.body.descriptions,
            picUrl:req.body.picUrl,
            rating: req.body.rating,
            year: req.body.year,
            isRead: req.body.read,
            genre: req.body.genre,
        })
        console.log('new note, ', note)
    note.save((error) => {
        if(error){console.log('error in new note: ', error)}
            res.status(200).end();
    });
})
router.delete('/:id', (req, res)=>{
    
        // console.log(req.params.id);
        const id = req.params.id;
        NotesDB.findByIdAndRemove(id,(error)=> {
            if(error) {
                console.log("error in Pages ", error);
            }
            res.status(204).end();
            console.log('delete note mongodb_id: ', id );
        }); 
})

router.put('/:id', (req, res)=> {
        const data = req.body; 
       

        const id = req.params.id;
        console.log("what's the id??", id);


        NotesDB.findByIdAndUpdate(id, data,(error, docs)=> {
            if(error){
                console.log('Error in Page ', error)
            }
            else {
                console.log('updated, ', data)
            }
        })
        

})


module.exports = router; 