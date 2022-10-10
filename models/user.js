const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  interested:{
    type:String,
  },
})

const User = mongoose.model("Users",userSchema);

module.exports = User