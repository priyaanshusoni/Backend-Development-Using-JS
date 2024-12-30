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

app.get("/" , (req,res)=>{
     res.send("Get request received !")
})
app.get("/api/users/" , (req,res)=>{
     res.status(201).send(users)
})
app.get("/api/users/:id" , (req,res)=>{
    const id = req.params.id;
    // console.log(typeof(id)); string 

    const user = users.find((u)=>u.id==id)
    console.log(user);

    if(!user){
        return res.json({
            msg : " No user Founds"
        })
    }
    return res.send(user)
})

app.listen(3000, ()=>{
    console.log(`App is running on port 3000`);
})