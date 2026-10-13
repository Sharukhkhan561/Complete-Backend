const mongoose = require("mongoose")



async function connectDB(){
    // await mongoose.connect("mongodb+srv://srk:Zy6I29FsZmut14c3@cluster0.rv3nmgy.mongodb.net/john")
    await mongoose.connect("mongodb+srv://srk:Zy6I29FsZmut14c3@cluster0.rv3nmgy.mongodb.net/project-1")
    console.log("connected to DB")
}

module.exports = connectDB