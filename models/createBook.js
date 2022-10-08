
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title:{
    type:string,
    required:true
  },
  author:{
    type:string,
    required:true
  },

})
const book = mongoose.model("Books",bookSchema);
exports.Book  = book