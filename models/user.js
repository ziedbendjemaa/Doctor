let mongoose=require("mongoose");
let Schema=mongoose.Schema;

let userSchema=new Schema({
    FirstName:String,
    email:String,
    password:String,
    number:String,
    registerDate: {
        type: Date,
        default: Date.now,
      },
      
      userRole: {
        type: String,
        default:'User',
        roles: ['User','Admin','Manager'],
      },

});
module.exports=mongoose.model("User",userSchema)