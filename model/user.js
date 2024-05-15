const moongose = require("mongoose")


const userSchema = new moongose.Schema({
    firstname: {
        type: String,
        default: null
    },
    lastname: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    token: {
        type: String,
        default: null
    }
    
})

module.export = moongose.module("user", userSchema)
