const Joi = require("joi");
const User = require('../models/user')

const createUser = async (req,res)=>{
function validation(user){
const schema = {
  name:Joi.string().required().min(3),
  age:Joi.number(),
  interested:Joi.string(),
}
return Joi.validate(user,schema)
}

let newUser = new User({
  name: req.body.name,
  age:req.body.age,
  interested:req.body.interestedt
})
const {error} = validation(req.body);
if(error) res.status(400).send(error.details[0].message)
try{

  const result = await newUser.save()
  res.send(result)
}
catch(error){
  console.log(error.message)
}
}
module.exports.createUser = createUser