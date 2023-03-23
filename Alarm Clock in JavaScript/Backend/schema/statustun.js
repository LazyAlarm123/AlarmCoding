const mongoose = require("mongoose");
const StatustunSchema = new mongoose.Schema({
    status_tun: String
  });
  
  const Statustun = mongoose.model('tun', StatustunSchema);
module.exports = Statustun;