const express = require("express");
const transaction = express.Router();
const transactionArray = require("../Models/Transaction.model");

//Validation


// GET ALL

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

//Post Create

transaction.post("/", (req, res) => {
    const newTran = req.body
     transactionArray.push(newTran)
     res.json(transactionArray)
 })

 // Delete

 transaction.delete('/:id', (req, res) => {
    const {id} = req.params

    if(transactionArray[id]) {
        const deletedTran = transactionArray.splice(id, 1)
        res.json(deletedTran)
    } else {
        res.status(404).json({sucess: false, error: `no log with this id: ${id}`})
    }
})

// Update PUT

transaction.put('/:id', (req, res) => {
    const {id} = req.params
    const updatedTran = req.body

    if(transactionArray[id]) {
        transactionArray[id] =  updatedTran
        res.status(202).json({ success: true, payload: transactionArray[id]})

    } else {
        res.status(404).json({success: false, error: `There was no transaction the with id of ${id}`})

    }

})











module.exports = transaction