const router = require("express").Router()

router.get("/register", (req, res) => {
  res.send("GET route for register")
})


module.exports = router