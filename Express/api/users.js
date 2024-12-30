const express = require("express");



const Router = express.Router;

const userRouter= Router();


// console.log(userRouter);

userRouter.get('/',function(req,res){
    res.send("got a get request at /api/users");
})
userRouter.put('/',function(req,res){
    res.send("got a put request at /api/users");
})

userRouter.delete('/',function(req,res){
    res.send(`Got a ${req.method} at api/users`);
})

module.exports =  userRouter
