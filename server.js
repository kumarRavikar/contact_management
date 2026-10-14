import express from "express"
import dotenv from "dotenv"
dotenv.config()
let app = express()
let PORT = process.env.PORT || 3000 
app.listen(PORT,()=>{
    console.log(`servier is running on ${PORT}`)
})