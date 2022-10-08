const express = require("express");
const {createBook} = require("../controllers/createbook")
const router = express.Router();

router.post("/api/addbook",createBook);

module.exports.router = router;

