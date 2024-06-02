const loanSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
    type: Number,
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
});
