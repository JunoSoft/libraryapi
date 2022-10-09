const express = require("express");
const {createBook,getBooks,updateBook} = require("../controllers/books");

const router = express.Router();

router.post("/addbook",createBook);
router.get("/getbooks",getBooks)
router.get("/updatebook/:id",updateBook)


module.exports = router;

