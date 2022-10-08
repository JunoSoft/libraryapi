
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title:{
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
  pages:{
    type:Number,
    required:true,
    trim:true
  },
  cost:{
    type:Number,
    required:true,
    trim:true
  },
  store:{
    type:Number,
    required:true,
    trim:true
  },
  viwerAge:{
    type:Number,
    required:true,
    trim:true
  },

})
const Book = mongoose.model("Books",bookSchema);
module.exports  = Book