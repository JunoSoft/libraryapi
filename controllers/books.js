const Book = require("../models/books");
const Joi = require("joi");
const { param } = require("../routers/books");
const createBook = async (req, res) => {
  let newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    cost: req.body.cost,
    store: req.body.store,
    viewerAge: req.body.viewerAge,
  });
  function validateBook(book) {
    const schema = {
      title: Joi.string().required().min(3).trim(true),
      author: Joi.string().required().min(2).trim(true),
      pages: Joi.number().required().min(1),
      cost: Joi.number().required().min(1),
      store: Joi.number().required().min(1),
      viewerAge: Joi.number().required().min(1),
    };
    return Joi.validate(book, schema);
  }
  const { error } = validateBook(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    res.status();
  }
  try {
    const result = await newBook.save();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    res.status(500).send("SERVER PROBLEM");
    res.send(error.message);
  }
};
const updateBook = async (req, res) => {
  try {
    const bookToUpdate = await Book.findByIdAndUpdate({ _id: req.params.id },{ $set: { title: req.body.title } });
    if (bookToUpdate) {

      const result = await bookToUpdate.save();
      res.send(result);
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
module.exports.updateBook = updateBook;
