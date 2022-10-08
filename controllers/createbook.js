const Book = require("../models/createBook")
exports.addBook = (req,res)=>{
const createBook = new Book({
  title:req.body.title,
  author:req.body.title
})
}