const express = require("express");
const cors = require("cors");
const mongoose  = require("mongoose");
require("dotenv").config();
const RegisterModel = require('./models/Register')
const TopicModel = require('./models/Topic')

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;
const client = mongoose.connect(URI);

app.post("/login", (req, res)=>{
  const {email, password} = req.body;
  RegisterModel.findOne({email: email})
  .then (user => {
    if(user) {
      if (user.password === password) {
        res.json("You have successfully logged in")
      } else {
        res.json("The email or password is incorrect")
      }
    } else {res.json("Account does not exist")}
  })
  .catch(err => res.status(500).json(err));
})

app.post('/register', (req, res) =>{
  const { email, password} = req.body;
  RegisterModel.findOne({email: email})
  .then(user =>{
    if(user) {
      res.json("Already have an account")
    } else {
      RegisterModel.create({email: email, password: password})
      .then(result =>res.json("Account created"))
      .catch(err => res.status(500).json(err));
    }
  }).catch(err => res.status(500).json(err));
})

app.get('/topics', (req, res) =>{
  TopicModel.find()
  .then(topic => res.json(topic))
  .catch(err => res.status(500).json(err));
})

app.post('/topics', (req, res) =>{
  const { title, description, author } = req.body;
  const answers = [];
  TopicModel.create({title, description, author, answers })
  .then(result => res.json("Topic created"))
  .catch(err => res.status(500).json(err));
})

app.get('/topics/:topicId', (req, res) =>{
  TopicModel.findById(req.params.topicId)
  .then(topic => res.json(topic))
  .catch(err => res.status(500).json(err));
})

app.post('/topics/:topicId/answers', (req, res) =>{
  const { description, author } = req.body;
  TopicModel.findById(req.params.topicId)
  .then(async topic => {
    const answer = {description, author, author: 'john@doe.com', likes: 0, dislikes: 0};
    if (!topic.answers) {
      topic.answers = [];
    }
    topic.answers.push(answer);
    await topic.save();
    res.json("Answer saved");
  })
  .catch(err => res.status(500).json(err))
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})