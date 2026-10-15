const express = require('express');
const{Createcontact} = require('../controllers/contactcontroller')

const contactRoutes = express.Router();
contactRoutes.post("/", Createcontact);

module.exports = contactRoutes