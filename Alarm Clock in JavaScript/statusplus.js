const mongoose = require("mongoose");
const StatusplusSchema = new mongoose.Schema({
    status_plus: String
  });
  
  const Statusplus = mongoose.model('plus', StatusplusSchema);
module.exports = Statusplus;