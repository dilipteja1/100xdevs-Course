const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { default: mongoose } = require("mongoose");

const router  = express.Router();

router.put("/transfer", authMiddleware, async (req,res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount, to} = req.body;
    const account  = await Account.findOne({
        user: req.userId
    }).session(session).exec();

    if(account.balance < amount){
        await session.endSession()
        res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({ user: to }).session(session);

    if(!toAccount){
        await session.endSession()
        res.status(400).json({            
            message: "Invalid account"
        })
    }
    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    }).session(session);

    await Account.updateOne({
        userId : to
    }, {
        $inc: {
            balance: amount
        }
    }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    session.endSession()
    res.status(200).json({
        message: "Transfer successful"
    })

})


router.get("/balance", authMiddleware, async (req, res) => {
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