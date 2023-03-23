const mongoose = require("mongoose");
const StatusgunSchema = new mongoose.Schema({
    status_gun: String
  });
  
  const Statusgun = mongoose.model('gun', StatusgunSchema);
module.exports = Statusgun;