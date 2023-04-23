const express = require("express");
const app = express();
const cors = require('cors')
const logger = require("morgan")
const tranController = require("./Controllers/Transaction.Controler.js")

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

//MIDDLEWARE



app.get("/", (req, res) => {
    res.send("Get in loser we are going to budget!");
  })

app.use("/transactions", tranController)

app.get("*", (req, res) => {
  res.status(404).json({error: "Not Found"})
})



module.exports = app