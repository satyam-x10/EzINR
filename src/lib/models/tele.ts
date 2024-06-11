const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const telegramSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    chatId: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "EzINR",
  }
);

const Telegram =
  mongoose.models.Telegram || mongoose.model("Telegram", telegramSchema);

export default Telegram;
