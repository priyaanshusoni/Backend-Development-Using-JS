const express = require("express");
const app = express();

const users = [
    {
        id : 1,
        name  : "Micheal"
    },
    {
        id : 2,
        name  : "Micheal vuen"
    }
]
app.get("/api/users" , (req,res)=>{
    console.log(req);
    console.log(req.query);
    res.send(req.query)
})



app.listen(3000, ()=>{
    console.log(`App is running on port 3000`);
})