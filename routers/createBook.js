const express = require("express");
const book = require("../controllers/createbook")
const router = express.Router();

router.post("/addbook",book.router);

module.exports.router = router;

