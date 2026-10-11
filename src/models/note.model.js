const mongoose = require("mongoose");

//schema creation
const noteSchema = new mongoose.Schema({
    title : String,
    description: String
})

const noteModel = new mongoose.model("note", noteSchema)

module.exports= noteModel;