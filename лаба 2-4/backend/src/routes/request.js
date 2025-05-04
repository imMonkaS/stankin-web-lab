const express = require('express');
const ContactRequestController = require('../controllers/contact');

const contact_router = express.Router();

contact_router.post('/request', ContactRequestController.postRequest);

module.exports = contact_router;
