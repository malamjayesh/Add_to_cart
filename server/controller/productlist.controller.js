const Productlist = require("../model/productlist.model")
const Addproduct = async(req,res)=>{
    const {productName,description,price,category} = req.body;
    try {
        const product = await Productlist.create({
            productName,
            description,
            price,
            category
        })
        res.status(201).json({
            message:"Product added successfully",
            product
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
        })
    }
}
const Getproduct = async(req,res)=>{
    try {
        const Allproductlist = await Productlist.find();
        res.status(200).json({
            Allproductlist
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
        })
    }
}
const AddCart = async(req,res)=>{
    try {
        const {productName,description,price,category} = req.body;
        const product = await Productlist.create({
            productName,
            description,
            price,
            category
        })
        res.status(201).json({
            message:"Add to cart successfully",
            product
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong",
        })
    }
}
module.exports = {Addproduct,Getproduct,AddCart}