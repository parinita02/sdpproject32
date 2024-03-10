// const express =require("express")
// const {MongoClient} = require("mongodb")
// const app = express()
// app.use(express.json())//to parse JSON Data

// const dburl = "mongodb://localhost:27017"
// const dbname = "projectdb"

// const client = new MongoClient(dburl)//creating client variable 
// client.connect().then(() => {
//     console.log("Connected to DB Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });

// const db = client.db(dbname)

// app.post("/admin", async (request,response)=>{
//     try
//     {
//         const a = await request.body
//          db.collection("admin").insertOne(a)
//          response.send("Admin data Inserted Successfully")
       
//     }
//     catch(e)
//     {
//            console.log(e.message)
//     }
// })

// app.post("/addemployee", async (request,response)=>{
//     try
//     {
//         const emp = await request.body
//          db.collection("employee").insertOne(emp)
//          response.send("Employee data Inserted Successfully")      
//     }
//     catch(e)
//     {
//            console.log(e.message)
//     }
// })



// const port = 2032
// app.listen(port,()=>{
//     console.log("Server is running at port:"+port)
// })

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl ="mongodb://localhost:27017/projectdb"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});




const app = express() 
app.use(express.json()) // to parse JSON data
app.use(cors())

// const adminroutes = require("./routes/adminroutes")
// const employeeroutes=require("./routes/employeeroutes")

// app.use("",adminrouter)
// app.use("",employeerouter)


 


const port= 2032
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})