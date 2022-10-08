
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

})
const Book = mongoose.model("Books",bookSchema);
module.exports  = Book