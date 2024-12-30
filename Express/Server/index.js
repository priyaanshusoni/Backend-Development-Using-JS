const express = require("express");

const app = express();

const apiRouter = require("../api");

app.use('/api',apiRouter);


app.get('/',(rea,res)=> res.send("Helllo Word"));


app.listen(3000);