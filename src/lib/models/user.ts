
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  aadhar :{
    type :Number ,
    required :true,
    unique : true
  },
  phone:{
    type: Number,
    required:true,
    unique :true
  },
  upi:{
    type: String,
    required:true,
    unique :true
  }

});

const User = mongoose.models.User|| mongoose.model('User', userSchema);

module.exports = User;
