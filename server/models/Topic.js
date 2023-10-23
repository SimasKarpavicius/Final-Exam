const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema ({
    title: String,
    description: String,
    author: String,
})

const TopicModel = mongoose.model("topic", TopicSchema)
module.exports = TopicModel;