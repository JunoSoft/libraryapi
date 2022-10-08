const express = require('express');
const mongoose = require('mongoose');
const book = require("./routers/createBook");
const app = express();

mongoose.connect("mongodb://localhost/libarydb")
.then(()=>console.log("DATABASE Conneted!"));


app.use(express.json()) ;
app.use("/api/",book.router);

app.listen(3000,()=>console.log("SERVER IS well Connected--PORT: 3000"));