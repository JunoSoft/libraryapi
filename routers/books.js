const express = require("express");
const createBook = require("../controllers/books");
const getBooks = require("../controllers/books")
const router = express.Router();

router.post("/addbook",createBook);
router.get("/getbooks",getBooks);

module.exports = router;

