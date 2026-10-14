
const express = require('express');
const noteModel = require('./models/note.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')

const app = express(); 
app.use(express.json()) //middleware its necessary for getting the data in request.body 
const notes=[];

//Post API
// title, description
// app.post("/notes",(req,res)=>{
//     notes.push(req.body)

//     res.status(201).json({
//         message:"note created successfully"
//     })

// })
// // Get API
// app.get("/notes",(req,res)=>{
//     res.status(200).json({
//         message:'notes fetch succesfully',
//         notes:notes
//     })
// })

// // Delete API /notes/index
// app.delete("/notes/:index",(req,res)=>{
//     const index = req.params.index
//     delete notes [ index ]
//     res.status(200).json({
//         message:"note deleted successfully"
//     })

// })

// //Pathc API
// app.patch("/notes/:index",(req,res)=>{
//     const index = req.params.index
//     const description = req.body.description
//     notes[index].description = description
//     res.status(200).json({
//         message:"description note updated succesfully"
//     })
// })

// post api for database
// app.post('/notes',async (req,res)=>{
//     const data = req.body // {title, description}
//     await noteModel.create({
//         title: data.title,
//         description: data.description
//     })
//     res.status(201).json({
//         message: "Note Created"
//     })
// })
// // get api for database
// app.get('/notes', async (req,res)=>{
//     const notes =await noteModel.find()

//     res.status(200).json({
//         message:"Notes fetch successfully",
//         notes:notes
//     })
// })

// //delete api for database
// app.delete('/notes/:id', async (req,res)=>{
//     const id = req.params.id

//     await noteModel.findOneAndDelete({
//         _id:id
//     })
//     res.status(200).json({
//         message: "Note deleted successfully"
//     })
// })
// //patch api database
// app.patch('/notes/:id', async (req,res)=>{
//     const id = req.params.id
//     const description = req.body.description

//     await noteModel.findOneAndUpdate({_id:id},{description: description})
//     res.status(200).json({
//         message:"Note Updated successfully"
//     })
// })
const upload = multer({storage : multer.memoryStorage()})
app.post('/create-post', upload.single("image"), async (req,res)=>{

    const result = await uploadFile(req.file.buffer)
    console.log("result is", result)
    const post = await postModel.create({
        image: result.url,
        caption : req.body.caption
    })
    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get('/posts', async (req,res)=>{
    const posts = await postModel.find()

    return res.status(200).json({
        message:"posts fetched successfully",
        posts
    })
})
module.exports = app;