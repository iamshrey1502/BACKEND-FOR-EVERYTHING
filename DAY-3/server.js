const express=require("express");

const app=express();

app.get("/",function(req,res){
    res.send("Hello World");
});

app.listen(3000,()=>{// this callback executes whenever the server is started
    console.log("Server is running on port 3000");

});


// API-> set of rules and protocols which helps to communicate between two software programmes
// REST API-> HTTP/HTTPS & stateless & client-server communication 
// HTTP methods-> GET,POST,PUT,PATCH DELETE 