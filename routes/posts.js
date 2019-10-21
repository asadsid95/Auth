const router = require("express").Router()
const verify = require("./verifyToken")

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "My first post",
      description: "Random access only allowed to be viewed upon verification"
  }})
})

module.exports = router;