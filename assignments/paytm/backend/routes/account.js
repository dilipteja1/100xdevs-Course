const express = require("express");
const { authmiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");

const router  = express.Router();

router.put("/transfer", authmiddleware, async (req,res) => {
    const session = new mongoose.session();

    session.startTransaction();
    const {amount, to} = req.body;
    const account  = await Account.findOne({
        userId: req.userId
    });

    if(account.balance < amount){
        res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId : to
    })
    if(!toAccount){
        res.status(400).json({
            message: "Invalid account"
        })
    }
    await account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await toAccount.updateOne({
        userId : to
    }, {
        $inc: {
            balance: amount
        }
    })
    // Commit the transaction
    await session.commitTransaction();
    
    res.status(200).json({
        message: "Transfer successful"
    })

})

router,get("/balance", authmiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })
    if(account) {
        res.status(400).json({
            balance: account.balance
        })
    }
    res.status(411).json({
        message: "account not found"
    })

})

module.exports = router;