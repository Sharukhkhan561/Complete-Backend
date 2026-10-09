//server ko start krna server.js file ka kam hai
const app = require("./src/app")
app.get("/",(req,res)=>{
    res.send("server start")
})
app.get("/about", (req,res)=>{
    res.send("about page start")
})
app.listen(3000,()=>{ 
console.log("server is running on port 3000")
}) // server ko call krna