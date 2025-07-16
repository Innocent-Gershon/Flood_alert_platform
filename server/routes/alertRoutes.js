const express = require('express');
const router = express.Router();
const { sendAlert } = require('../controllers/alertController');

router.post('/send', sendAlert);

module.exports = router;
