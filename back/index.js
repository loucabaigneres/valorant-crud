import bodyParser from "body-parser"
import cors from "cors"
import express from "express"

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.get("/agents", (req, res) => {
  res.json([
    "Brimstone",
    "Phoenix",
    "Sage",
    "Sova",
    "Viper",
    "Cypher",
    "Reyna",
    "Killjoy",
    "Breach",
    "Omen",
    "Jett",
    "Raze",
    "Skye",
    "Yoru",
    "Astra",
    "KAY/O",
    "Chamber",
    "Neon",
    "Fade",
    "Harbor",
    "Gekko",
    "Deadlock",
    "Iso",
    "Clove",
    "Vyse",
  ])
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
