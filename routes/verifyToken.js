const jwt = require("jsonwebtoken")

//This is a middleware function that will be added to
//any routes that needed to be protected
function auth (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied!")
  
  try {
    const verified = jwt.verify(token, "morning")
    req.user = verified;
    next()
  } catch (err) {
    res.status(400).send("Invalid token")
  }
}

module.exports = auth