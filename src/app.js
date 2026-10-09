
const express = require('express');

const app = express();
app.use(express.json())
const notes=[];

//Post API
// title, description
app.post("/notes",(req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })

})
// Get API
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:'notes fetch succesfully',
        notes:notes
    })
})

// Delete API /notes/index
app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    delete notes [ index ]
    res.status(200).json({
        message:"note deleted successfully"
    })

})

module.exports = app;