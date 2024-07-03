import {User} from "../db";
import { JWT_SECRET } from "../config";
const jwt = require("jsonwebtoken");
const express = require("express")
const z = require("zod");

const router  = express.Router();

const signupSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    firstname: z.string(),
    lastname: z.string()
})

const signinSchema = z.onject({
    username: z.string().email(),
    password: z.string().min(6)
})
router.post("signup", async (req,res) =>{
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })    
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        }) 
    }

    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    newUser.save()
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    //success
    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})


router.post("signin" , async (req,res) => {
    body = req.body;
    const {success}  = signinSchema.safeParse(body);
    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: body.username,    
        password: body.password
    })

    if(existingUser){
        const token = jwt.sign({
            userId: existingUser._id
        }, JWT_SECRET)

        res.status(200).json({
            token: token
        })
        return;
    }
    res.status(411).json({
        message: "Error while logging in"
    })

})

module.exports = router;