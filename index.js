const express = require("express");
require("./db/config")
// const mongoose = require("mongoose") 
const app = express();
const user = require
// app.get("/",(req,resp)=>{
//     resp.send("app is working...")
// })
// const connectDB = async ()=>{
//     mongoose.connect('mongodb://localhost:27017/e-comm')
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model("products",productSchema);
//     const data = await product.find();
// }

// connectDB();

app.listen(5000);