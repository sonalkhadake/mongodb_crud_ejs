const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },
  phone: {
    type: String,
    required:true,
  },
 
  
});

const mongodbmodel = mongoose.model("User", Userschema);

module.exports = mongodbmodel