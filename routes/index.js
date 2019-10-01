// This is where we declare our routes
const { Router } = require("express")
const { main } = require("../lib/index")

const router = Router()

router.get("/", async (req, res) => {
  let weather = await main(req.body.location)
  res.render("index", { weather })
})

router.post("/", async (req, res) => {
  let weather = await main(req.body.location)
  res.render("index", { weather })
})

// Have the option to not call the API and serve static data back
// router.post("/", async (req, res) => {
//   let live = true

//   if (live) {
//     let weather = await main(req.body.location)
//     console.log(weather)
//     res.render("index", { weather })
//   } else {
//     let weather = {
//       first: "Winchester",
//       place: ["Hampshire", "England", "United Kingdom"],
//       temp: "17.4℃",
//       summary: "Mostly Cloudy"
//     }
//     res.render("index", { weather })
//   }
// })

module.exports = router
