require('dotenv').config()
require("./db/db").connect()
const express = require('express');
const app = express()

app.use(express.json())
 
app.get("/", (req,res)=> {
    res.send("<h1>Server is working</h1>")
})
app.post("/register", async (req,res) => {
        try {
            const { firstname,lastname,email,password } = req.body

            if(!(firstname && lastname && email && password)) {
                res.status(411).json({
                    message: "Wrong Inputes"
                })
            }
        } catch (error) {
            console.log(e);
        }
}) 



module.exports = app