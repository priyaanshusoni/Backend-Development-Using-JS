const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const UserRoute = require('./routes/user');
dotenv.config();
const PORT = process.env.PORT || 3001
const DB_URL = process.env.DB_URL
const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}))

app.use('/api/user',UserRoute)
async function main(){
    await mongoose.connect(DB_URL);
   

    app.listen(PORT , ()=>{
        console.log(`Server is running on PORT${PORT}`);
    })
}


main()


