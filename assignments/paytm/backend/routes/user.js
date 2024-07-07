
const jwt = require("jsonwebtoken");
const express = require("express")
const z = require("zod");
import {User, Account} from "../db";
import { JWT_SECRET } from "../config";
import { authmiddleware } from "../middleware";

const router  = express.Router();

const signupSchema = z.object({
    username: z.string().email().optional(),
    password: z.string().min(6).optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional()
})

const signinSchema = z.onject({
    username: z.string().email(),
    password: z.string().min(6)
})
router.post("signup", authmiddleware, async (req,res) =>{
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

    //create a dummy account to the user with some random amount
    const newAccount = await Account.create({
        userId: userId,
        balance: 1 + math.random() *10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    //success
    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})


router.post("signin" ,authmiddleware,  async (req,res) => {
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


const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/" , authmiddleware, async (req,res)=>{
    body= req.body;
    const {success} = updateBody.safeParse(body);
    if(!success){
        res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    await User.updateOne({_id: req.userId}, body);
    res.status(200).json({
        message: "Updated Successfully"
    })
})

router.get("bulk", async(req,res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
            {
                firstname: {"$regex" : filter}
            }, 
            {
                lastname: {"$regex" : filter}
            }
        ]
    })

    res.json({
        user: users.map(user => ({
                username : user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                id:user._id
            }))
        
    })
})

module.exports = router;