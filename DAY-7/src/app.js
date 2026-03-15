// server ko create krna 
// server ko config krna

const express=require("express");

const app=express();

app.use(express.json())//Middleware

module.exports=app;