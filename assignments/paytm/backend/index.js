const express  =  require("express");
const cors = require("cors");
const mainRouter  = require("./routes/index")

const app = express();

//to be able to route from different frontends
app.use(cors())

//to be able to parse the incoming json object from the frontend
app.use(express.json())

//prefexing API's
app.use("/api/v1", mainRouter);

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Listening on port 3000");
})