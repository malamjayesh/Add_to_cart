const User = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const register = async(req,res)=>{
    const {name,email,phone,password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"User already exists"
            })
        }
        const hash_password =await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            phone,
            password:hash_password
        })
        res.status(201).json({
            message:"User created successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
            error
        })
    }
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user){
            res.status(404).json({
                message:"User not found"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            res.status(400).json({message:"invalid credentials"})
        }
        const token = jwt.sign({id:user._id},process.env.MY_SECRET,{expiresIn:"1h"})
        res.status(200).json({message:"Login successful",token})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})     
    }                   
}    
module.exports = {register,login}