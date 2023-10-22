const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema ({
    email: String,
    password: String,
})

const RegisterModel = mongoose.model("register", RegisterSchema)
module.exports = RegisterModel;