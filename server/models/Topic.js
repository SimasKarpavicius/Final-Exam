const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
    description: String,
    author: String,
    likes: Number,
    dislikes: Number,
});

const TopicSchema = new mongoose.Schema ({
    title: String,
    description: String,
    author: String,
    answers: [AnswerSchema],
})

const TopicModel = mongoose.model("topic", TopicSchema)
module.exports = TopicModel;