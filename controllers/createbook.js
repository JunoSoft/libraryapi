const Book = require("../models/createBook")
exports.addBook = async (req,res)=>{

const bookSchema = {
  title:joi.string().required(),
  author:joi.string().required()
}
const createBook = new Book({
  title:req.body.title,
  author:req.body.title
})

const {error} = joi.validate(createBook,bookSchema)

}