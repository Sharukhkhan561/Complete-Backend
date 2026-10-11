const mongoose = require("mongoose")



async function connectDB(){
    await mongoose.connect("mongodb+srv://srk:Zy6I29FsZmut14c3@cluster0.rv3nmgy.mongodb.net/john")
    console.log("connected to DB")
}

module.exports = connectDB