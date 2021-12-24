
const user = require("../models/user");

let bc=require("bcryptjs");
let jwt=require("jsonwebtoken");
let config=require("config");
let secret=config.get("secret")


exports.signUp=async(req,res)=>{

let {FirstName,email,password,number,userRole}=req.body;
    try {
        let exestingUser=await user.findOne({email});
        if(exestingUser){
            res.status(400).json({msg:"this email have a account here"})
        }
        let newUser= new user({
            FirstName,
            email,
            password,
            number,
            userRole
        });
        let salt=await bc.genSalt(10);
        let hash=await bc.hashSync(password,salt)
        newUser.password=hash
        await newUser.save();

let payload={
id:newUser._id,
FirstName:newUser.FirstName,
};
        let token=jwt.sign(payload,secret)
        res.send(
            {token,
           newUser}
        )
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};
exports.login=async(req,res)=>{
    let {email,password}=req.body
    try {
        let theUser=await user.findOne({email})
        if(!theUser){
            res.status(400).json({msg:"email or password are wrong"})
        };
        let isMatch=await bc.compare(password,theUser.password)
        if(!isMatch){
            res.status(400).json({msg:"email or password are wrong"})
        }
        let payload={
            id:theUser._id,
            email:theUser.email,
            userRole:theUser.userRole

        }
        let token=jwt.sign(payload,secret)
        res.send({
            token,theUser
        })
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};
exports.getUser=(req,res)=>{
    res.send(req.user)
}