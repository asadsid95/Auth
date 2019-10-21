const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Validation
//const Joi = require('@hapi/joi');

router.get("/register", (req, res) => {
  res.send("GET route for register");
});

/*
const schema = {
  name: Joi.string()
    .min(6)
    .required(),
  email: Joi.string()
    .min(6)
    .required()
    .email(),
  password: Joi.string()
    .min(6)
    .required()
};
*/
router.post("/register", async (req, res) => {
  //Let's validate data (from req body) before we make a user
  // const validation = Joi.validate(req.body, schema);
  // res.send(validation);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists...");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    const newUser = await user.save();
    res.send(newUser);
  } catch (err) {
    res.status(400).send("Uh oh");
  }
});

router.post("/login", async (req, res) => {
  
  //Checking if the email exists
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send("Email doesn't exist!")
  
  //Comparing entered password with the user's stored password
  const validPass = await bcrypt.compare(req.body.password, user.password)
  if(!validPass) return res.status(400).send("Password not matched!")
  
  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, "morning")
  res.header("auth-token", token).send(token)

  //res.send("logged in")

})

module.exports = router;
