const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be provided"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email must be provided"],
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Username must be provided"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
