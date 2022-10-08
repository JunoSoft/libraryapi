const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require("./routers/books");
const app = express();

mongoose.connect("mongodb://localhost/liblarydb")
.then(()=>console.log("DATABASE Conneted!"));


app.use(express.json()) ;
app.use("/api/books",bookRoutes);

app.listen(3000,()=>console.log("SERVER IS well Connected--PORT: 3000"));