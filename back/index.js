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

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
