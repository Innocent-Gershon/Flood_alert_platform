const mongoose = require('mongoose');

const floodAlertSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  severity: String,
  message: String,
  location: String,
  language: String,
  channels: [String]
});

module.exports = mongoose.model('FloodAlert', floodAlertSchema);
