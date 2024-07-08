const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter contact name"],
    },
    email: {
      type: String,
      required: [true, "please enter email id"],
    },
    phone: {
      type: String,
      required: [true, "please enter phone"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
