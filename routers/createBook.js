const express = require("express");
const createBook = require("../controllers/createbook")
const router = express.Router();

router.post("/addbook",createBook);
router.get("/getbooks");

module.exports = router;

