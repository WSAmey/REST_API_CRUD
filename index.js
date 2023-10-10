import express from "express";
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js";

const app=express();

//here we have used method app.use() as body-parser is middelware and for middleware we use use() method 
app.use(bodyParser.json());

dotenv.config(); //as we can't directly used variables in dotenv so we need to use config() method
//The config() is a method which is provided by the dotenv module to config the env files.

const PORT =process.env.PORT || 3000 //if it dosnt get any PORT number them it will take 3000 as port number


// The process object in Node.js is a global object that provides information about the current Node.js process. This includes information such as the process ID, the process title, and the environment variables that are available to the process.

// The env property of the process object is an object that contains all of the environment variables that are available to the current Node.js process. Environment variables are key-value pairs that are used to configure applications. They can be set by the operating system, by the user, or by the application itself.

const MONGOURL= process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{

    console.log("DB connected Successfully");

    
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})

}).catch((error)=>{
    console.log(error);
})

app.use("/api/user",route)