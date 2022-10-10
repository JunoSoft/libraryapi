const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require("./routers/books");
const usersRoute = require("./routers/users")
const app = express();

mongoose.connect("mongodb://localhost/liblarydb")
.then(()=>console.log("DATABASE Conneted!"));


app.use(express.json()) ;
app.use("/api/books",bookRoutes);
app.use("/api/users",usersRoute)

app.listen(3000,()=>console.log("SERVER IS well Connected--PORT: 3000"));