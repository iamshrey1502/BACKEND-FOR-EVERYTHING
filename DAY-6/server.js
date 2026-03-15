//this file used for starting the server and connecting to database

const app=require("./src/app");
const mongoose=require("mongoose");

// function connectToDb(){

// }


app.listen("3000",()=>{
    console.log("server is running on port 3000");
});