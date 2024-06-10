import { Collection } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alertContactsSchema = new Schema(
  {
    email:{
      type:String,
      unique:false,
      required:false
    },
    telegram:{
      type:Number,
      unique:false,
      required:false
    },
  },
  { Collection: "EzINR" },
);

const AlertContacts = mongoose.models.AlertContacts || mongoose.model("AlertContacts", alertContactsSchema);

export default AlertContacts;
