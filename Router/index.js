const express = require("express");

const app= express();


const router = express.Router();

// router.all('/api(.*)') // this is the syntax to apply this router to all the paths except /api endpoints
router.all('/api/*', (req,res,next)=>{
    console.log(`the current path is ${req.url}`);
    next();
}) 

app.use(router);

app.get("/",(req,res)=> res.send("At Home Page"));

app.get("/users",(req,res)=> res.send("At users page"));

app.get("/users/data",(req,res)=> res.send("At users data page"));

app.get("/api",(req,res)=> res.send("at api page"));

app.get("/api/make",(req,res)=> res.send("At api make page"));


app.listen(3000);

