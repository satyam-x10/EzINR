
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    notifications: [
      {
        type: String,
        required: true, 
      }
    ]
  },{
    Collection:"EzINR"
  }
);

const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);

export default Notification;
