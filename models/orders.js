
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookId:{
    type:String,
    required:true,
    unique:true,
    trim:true
  },
  author:{
    type:String,
    required:true,
    trim:true
  },




})
const Order = mongoose.model("Order",bookSchema);
module.exports  = Order