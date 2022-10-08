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

const {error} = joi.validate(createBook,bookSchema);
if(error) res.status(400).send(error.details[0].message)
const result = await createBook.save();
res.send(result)

}