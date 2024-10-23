const express = require("express")
const {Addproduct,Getproduct, AddCart} = require("../controller/productlist.controller")

const router = express.Router()

router.post("/addproduct",Addproduct)

router.get("/getproduct",Getproduct)

router.post("/addcart",AddCart)
module.exports = router;