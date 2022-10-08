const Book = require("../models/books");
const Joi = require('joi')
const createBook = async (req,res)=>{


let newBook = new Book({
  title:req.body.title,
  author:req.body.author,
  pages:req.body.pages,
  cost:req.body.cost,
  store:req.body.store,
  viewerAge:req.body.viewerAge,

})
function validateBook(book){
const schema = {
  title:Joi.string().required().min(3).trim(true),
  author:Joi.string().required().min(2).trim(true),
  pages:Joi.number().required().min(1),
  cost:Joi.number().required().min(1),
  store:Joi.number().required().min(1),
  viewerAge:Joi.number().required().min(1),


}
return Joi.validate(book,schema)
}
const {error} = validateBook(req.body);
if(error) {
  res.status(400).send(error.details[0].message);
  res.status()
}
try{

  const result = await newBook.save();
  res.send(result)
}
catch(error){
  res.send(error.message)
}

}
module.exports = createBook