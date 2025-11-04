const express = require("express")
const app = express()
const dotenv = require("dotenv")
const path = require("path")
dotenv.config()
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, "/public")))

app.get("/", async (req, res) => {
  return res.render("boilerplate.ejs", { page: "chat" })
})

app.listen(PORT, () => console.log(`Server is listening to ${PORT}`))
