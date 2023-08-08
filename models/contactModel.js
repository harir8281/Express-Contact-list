const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {},
    email: {
      type: String,
      required: [true, "please add the email"],
    },
    phone: {
      type: String,
      required: [true, "please add the phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
