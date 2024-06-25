const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//patient initially have two kidneys out of which one kidney is failed
var users = [{
    name: "Dilip",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get('/', (req, res) => {
    let totalkidneys = users[0].kidneys.length;
    let healthykidneys = 0;
    let unhealthykidneys = 0;

    for(let i=0;i<totalkidneys;i++){
        if(users[0].kidneys[i].healthy)healthykidneys++;
        else unhealthykidneys++;
    }
    res.json({
        totalkidneys,
        healthykidneys,
        unhealthykidneys
    })
})

app.put('/', (req, res)  =>{
    let totalkidneys = users[0].kidneys.length;
    for(let i=0;i<totalkidneys;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg:"Put done"
    })
})

app.post('/', (req,res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:" Post Done!"
    })
})

app.delete('/', (req, res)=> {
    let totalkidneys = users[0].kidneys.length;
    for(let i=0;i<totalkidneys;i++){
        if(!users[0].kidneys[i].healthy){
            users[0].kidneys[i].healthy = true;
        }
    }
    res.json({
        msg:"Delete done!"
    })
})

app.listen(port);