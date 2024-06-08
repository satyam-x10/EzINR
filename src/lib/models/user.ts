import { Collection } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  address:{
    type:String,
    required:true,
  },
  dob:{
    type:Date,
    required:true,

  },
  aadhar: {
    type: Number,
    required: false,
    unique: true,
  },
  upi: {
    type: String,
    required: false,
    unique: true,
  },
},{Collection:"EzINR"});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User
