const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
  details: {
    // type: Object,
    // required: false,
    description: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 10)
          throw new Error("Description should be minimum of 10 letters");
      },
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) throw newError("Price should not be negative");
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    phone: {
      type: String,
      validate(value) {},
    },
    images: {
      type: Array,
      validate(value) {
        if (value.length < 2)
          throw new Error("There should be at least 2 images");
      },
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
});

const roomModel = mongoose.model("rooms", roomSchema);
module.exports = roomModel;
// module.exports = mongoose.model("rooms", roomSchema);
