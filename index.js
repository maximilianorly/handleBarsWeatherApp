// This is where we handle our server setup
const express = require("express")
const path = require("path")
const hbs = require("express-handlebars")
const bodyParser = require("body-parser")

const port = process.env.PORT || 3000

const routes = require("./routes/index")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ encoded: false }))
app.use(bodyParser.json())

app.engine(
  ".hbs",
  hbs({
    defaultLayout: "layout",
    extname: ".hbs"
  })
)

app.set("view engine", ".hbs")

app.use("/", routes)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
