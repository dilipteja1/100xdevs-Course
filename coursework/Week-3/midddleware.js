const express = require("express");

const app = express();

function  userMiddleware(req, res, next){
    if(username != "dilip" && password != "pass"){
        res.status(403).json({
            msg:"incorrect inputs"
        })
    }else{
        next();
    }
}

function kidneyMiddleware(req, res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg:"incorrect kidney ID"
        })
    }else {
        next();
    }
}

app.get("/heatlh-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Everything is fine");
});

//global catches . if there is some error in the above routes. then
//this function catches the error
app.use((err, req,res,next) => {
    res.json({
        msg: "something is wrong with the server"
    })
})

app.listen(3000);