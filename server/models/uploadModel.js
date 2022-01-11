const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  imageUrl: String
});

const Upload = mongoose.model("Upload", uploadSchema);
module.exports = Upload;
