const express = require("express");
const cors = require("cors");
const mongoose  = require("mongoose");
require("dotenv").config();
const RegisterModel = require('./models/Register')

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
        res.json("Success")
      } else {
        res.json("The password is incorrect")
      }
    } else {res.json("No record exists")}
  })
  .catch(err => res.status(500).json(err));
})

app.post('/register', (req, res) =>{
  const { name, email, password} = req.body;
  RegisterModel.findOne({email: email})
  .then(user =>{
    if(user) {
      res.json("Already have an account")
    } else {
      RegisterModel.create({name: name, email: email, password: password})
      .then(result =>res.json("Account created"))
      .catch(err => res.status(500).json(err));
    }
  }).catch(err => res.status(500).json(err));
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})