
const jwt = require("jsonwebtoken");
const express = require("express")
const z = require("zod");
const { User, Account } = require("../db");
const { JWT_SECRET }  = require("../config");
const  { authMiddleware } = require("../middleware");

const router  = express.Router();

const signupSchema = z.object({
    username: z.string().email().optional(),
    password: z.string().min(6).optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional()
})

const signinSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

router.post("/signup", async (req,res) =>{
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
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

    const userId = newUser._id;

    //create a dummy account to the user with some random amount
    const newAccount = await Account.create({
        user: userId,
        balance: 1 + Math.random() *10000
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


router.post("/signin" ,  async (req,res) => {
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


const updateBody = z.object({
	password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

router.put("/" , authMiddleware, async (req,res)=>{
    const body= req.body;
    const {success} = updateBody.safeParse(body);
    if(!success){
        res.status(411).json({
            message: "Incorrect Inputs"
        })
    }
    console.log(body);
    await User.updateOne({
        _id : req.userId
    }, body )
    res.status(200).json({
        message: "Updated Successfully"
    })
})

router.get("/bulk", async (req,res) => {
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