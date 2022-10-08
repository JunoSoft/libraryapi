
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },

})
const book = mongoose.model("Books",bookSchema);
exports.Book  = book