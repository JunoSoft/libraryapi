const express = require('express');
const book = require("./routers/createBook")
const app = express();


app.use(express.json()) 
app.

app.listen(3000,()=>console.log("SERVER IS well Connected--PORT: 3000"))