const express = require("express");
const app = express();
const dotenv = require("dotenv");
//app.use(express.static("public"))
const mongoose = require("mongoose");

//Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const econDataRoute = require("./routes/econData")

//dotenv.config()

//Connect to DB
mongoose.connect("mongodb://localhost:27017/hello", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.on("connected", () => {
  console.log("Connected MongoDB using Mongoose.");
});

//Middleware
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use(econDataRoute);

app.listen(3000, () => console.log("Node.JS Server listening to 3000 using Express framework"));
