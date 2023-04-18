const express = require("express");
const app = express();
const tranController = require("./Controllers/Transaction.Controler.js")

// app.use(cors())
// app.use(logger('dev'))

//MIDDLEWARE

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Get in loser we are going to budget!");
  })

app.use("/transactions", tranController)



module.exports = app