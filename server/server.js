require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const User_router = require("./routes/user.route")
const Product_router = require("./routes/productlist.route")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/add-product")
.then(()=>{
    console.log("Connected mongodb database");
})
.catch((error)=>{
    console.log(error);
})
app.use("/api/auth",User_router)
app.use("/api/product",Product_router)
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server started at port num:-${PORT}`);
})