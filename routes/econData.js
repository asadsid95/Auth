const router = require("express").Router()

// GET request to obtain data

// UPDATE:
// Currently get the raw data  
router.get("/ind-econ.json", async (req, res) => {
  try {
      
    res.status(200).send("code obtained!")
  } catch (err) {
    res.status(400).send("error getting list")
  }
}
)

module.exports = router;