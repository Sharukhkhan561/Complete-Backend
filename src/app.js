
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

//Pathc API
app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    const description = req.body.description
    notes[index].description = description
    res.status(200).json({
        message:"description note updated succesfully"
    })
})

module.exports = app;