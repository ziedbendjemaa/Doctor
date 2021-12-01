let mongoose=require("mongoose");
let config=require("config");
let db=config.get("db");



let conectDb=async()=>{
    try {
        await mongoose.connect(db);
        console.log("data base is succesfully conected")
    } catch (error) {
        console.log(error.message)
        
    }
};
module.exports=conectDb