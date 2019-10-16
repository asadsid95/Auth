const express = require("express")
const app = express()
const dotenv = require("dotenv")
//app.use(express.static("public"))
const mongoose = require("mongoose")

dotenv.config()

//Connect to DB
mongoose.connect(process.env.MONGODB,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => console.log("Connected to DB!")
);

//Import routes
const authRoute = require('./routes/auth')


//Route middleware
app.use('/api/user', authRoute)


app.listen(3000, () => console.log("Node.JS server listening to 3000 using Express framework"))