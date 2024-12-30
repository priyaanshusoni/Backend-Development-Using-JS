const express = require("express");
const userRouter = require("./users");

const Router = express.Router;

const apiRouter = Router();


apiRouter.use('/users',userRouter);


module.exports=apiRouter