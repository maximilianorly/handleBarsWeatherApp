// This is where we declare our routes
const { Router } = require("express")
const { main } = require("../lib/index")

const router = Router()

router.get("/", async (req, res) => {
  let weather = await main("chester")
  res.render("index", { weather })
})

router.post("/", async (req, res) => {
  let weather = await main(req.body.location)
  res.render("index", { weather })
})

module.exports = router
