const express = require("express");

const app = express();
const port = 3000;
function sumation(n) {
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum = sum +i;
    }
    return sum;
}
app.get('/' , (req, resp) => {
    const n = req.query.n;
    const ans = sumation(n);
    resp.send("Hello world dilip teja. The answer is " + ans);
})

app.listen(port , () => {
    console.log(`server listening on port ${port}`)
})