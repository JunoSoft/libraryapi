const express = require("express");
const createBook = require("../controllers/createbook")
const router = express.Router();

router.post("/",createBook);

module.exports = router;

