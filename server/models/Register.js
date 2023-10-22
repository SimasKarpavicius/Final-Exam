const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema ({
    email: String,
    password: String,
})

const RegisterModel = mongoose.model("register", RegisterSchema)
module.exports = RegisterModel;

const PostSchema = new mongoose.Schema ({
    title: String,
    description: String,
})

const PostModel = mongoose.model("post", PostSchema)
module.exports = PostModel;