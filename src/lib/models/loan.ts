import { Collection } from "mongoose";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    interestRate: {
      type: Number,
      required: true,
    },
    repaymentTerm: {
      type: Date,
      required: true,
    },
    latePaymentFee: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    grantedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { Collection: "EzINR" },
);

const Loan = mongoose.models.Loan || mongoose.model("Loan", loanSchema);

export default Loan;
