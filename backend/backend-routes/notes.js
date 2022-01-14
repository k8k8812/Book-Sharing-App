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
    // console.log(req.body.descriptons);

        const note = new NotesDB({
            title: req.body.title,
            author: req.body.author,
            descriptons: req.body.descriptons,
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
        let title = data.title; 
        let author = data.author;
        let descriptions = data.descriptons;
        let picUrl = data.picUrl;
        let rating = data.rating;
        let year = data.year;
        let isRead = data.read; 
        let genre = data.genre;

        const id = req.params.id;
        console.log("what's the id??", id);


        let okk = NotesDB.findById(id, (error)=> {
            if(error){
                console.log('Error in Page ', error)
            }
        
        const note = new NotesDB({
            title: title, 
            author: author,
            descriptions: descriptions,
            picUrl: picUrl,
            rating: rating,
            year: year,
            isRead: isRead,
            genre: genre

        })
            note.save((error) => {
                if(error) console.log("Error in Pages" + error)
                   res.status(201).end();  
            });

        })
        // console.log("if thre's a result", okk);
        

})


module.exports = router; 