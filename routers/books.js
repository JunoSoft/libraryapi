const express = require("express");
const {createBook,getBooks,updateBook,deleteBook} = require("../controllers/books");

const router = express.Router();

router.post("/addbook",createBook);
router.get("/getbooks",getBooks)
router.put("/updatebook/:id",updateBook)
router.delete("/deletebook/:id",deleteBook)


module.exports = router;

