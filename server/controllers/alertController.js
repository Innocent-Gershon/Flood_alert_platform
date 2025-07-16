const FloodAlert = require('../models/FloodAlert');
// Future: import sendSMS, sendVoice, radioIntegration from ../services

exports.sendAlert = async (req, res) => {
  try {
    const alert = await FloodAlert.create(req.body);
    // TODO: send via SMS, radio, etc.
    res.status(201).json({ success: true, data: alert });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
