const mongoose = require("mongoose")
const Schema = mongoose.Schema()

//Create a Schema for user

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6, 
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  date: {
    type: Date,
    default: Date.now
  }
})

//Export the schema as a model
const User = mongoose.Model("User", userSchema)

//using Node, export a module which will be based on User
module.exports = User