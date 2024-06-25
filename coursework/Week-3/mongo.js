const express = require("express");
const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");

const app = express();
app.use(express.json());

mongo.connect("mongodb+srv://tejadilip23898:qqDHnEarn1JKsG1q@cluster0.6ltyozn.mongodb.net/users")

const user = mongo.model('Users', {name:String, email: String, password: String});

app.post("/signup",  async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existinguser = await user.findOne({email:username});
    if(existinguser){
        return res.status(400).json({
            msg: "User already existed"
        });
    }

    const user1 = new user({
        name:name,
        email:username,
        password:password
    });

    user1.save();
    res.json({
        "msg":"User created successfully"
        
    })

})

const port  = 3000;
app.listen(port, ()=> {
    console.log("listening to the app at port 3000");
})