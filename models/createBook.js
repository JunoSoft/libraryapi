const express = require("express");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title:{
    type:string,
    required:true
  },
  author:{
    type:string,
    required:true
  },

})
