const express = require("express");
const transaction = express.Router();
const transactionArray = require("../Models/Transaction.model");

//Validation


// index

transaction.get("/", (req, res) => {
    res.status(202).json(transactionArray)
})

// GET individual 
transaction.get("/:id", (req, res) => {
    const {id} = req.params
    tran = transactionArray[id]

    if(tran){
        res.json(transactionArray[id])
    }else {
        res.redirect(302, "/*")
    }
})



module.exports = transaction