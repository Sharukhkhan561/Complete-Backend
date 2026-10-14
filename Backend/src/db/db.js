const mongoose = require("mongoose")



async function connectDB(){
    // await mongoose.connect("mongodb+srv://srk:Zy6I29FsZmut14c3@cluster0.rv3nmgy.mongodb.net/john")
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to DB")
}

module.exports = connectDB