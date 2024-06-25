const express = require("express")
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const app = express();
app.use(express.json()); 

//inmemory storage
const ALL_USERS = [
    {
        username: "dilip",
        password: "123",
        name: "dilip",

    },
    {
        username: "teja",
        password: "234",
        name: "teja",

    },
    {
        username: "polamarasetty",
        password: "345",
        name: "polamarasetty",
    },
]

function userExists(username, password){
    let userexists = false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userexists = true;
        }
    }
    return userexists;
}

app.post("/signin", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)){
        response.status(403).json({
            msg: "User doesnot exist in out memory db",
        });
    }
    var token =  jwt.sign({username:username}, jwtpassword);
    return res.json({
        token,
    });
});



app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtpassword);

    const username = decoded.username
    return res.json({
        users: ALL_USERS.filter(function(value){
            if(value.username == username)
                return false;
            else return true;
        })
    })

})

const port = 3000;
app.listen(port, ()=> {console.log("express is listening on port 3000");})