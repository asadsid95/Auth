const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
//app.use(express.static("public"))
const mongoose = require("mongoose")

//Import routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const econDataRoute = require('./routes/econData')
//dotenv.config()

//Connect to DB
mongoose.connect(process.env.MONGODB,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);
mongoose.connection.on("connected", () => {console.log("hello")})

//Middleware
app.use(express.json())

//Route middleware
app.use('/api/user', authRoute)
app.use("/api/posts", postRoute)
app.use(econDataRoute)

app.listen(3000, () => console.log("Node.JS Server listening to 3000 using Express framework"))