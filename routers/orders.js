const express = require("express");
const {createUser} = require("../controllers/users")
const router = express.Router();

router.post("/createuser",createUser)

module.exports = router