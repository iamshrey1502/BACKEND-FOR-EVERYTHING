const mongoose=require("mongoose");

function connectToDb(){
    mongoose.connect("mongodb+srv://shreymishra1502_db_user:bB796RupyBQD8htG@cluster0.dbja7dv.mongodb.net/day-7")
    .then(()=>{
        console.log("Connected to Database");
    });
}

module.exports=connectToDb;