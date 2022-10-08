const express = require("express");
const book = require("../controllers/createbook")
const router = express.Router();

router.post("/api/addbook",book.createBook);

module.exports.router = router;

