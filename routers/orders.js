const express = require("express");
const {createOrder} = require("../controllers/orders")
const router = express.Router();

router.post("/odering",createOrder)

module.exports = router