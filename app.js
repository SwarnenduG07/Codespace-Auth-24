require('dotenv').config()
require("./db/db").connect()
const express = require('express');
const app = express()
 
app.get("/", (req,res)=> {
    res.send("<h1>Server is working</h1>")
})

module.exports = app