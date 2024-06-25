const express = require("express");
const z = require("zod");

const app = express();
//to validate the input if its a array of numbers
const schema1 = z.array(z.number());

const schema2 = z.object({
    username: z.string().min(3),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.use(express.json());

app.post("/health-checkup", (req, res) =>{
    const kidneys = req.body.kidneys
    const response = schema1.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    }
})

app.listen(3000);