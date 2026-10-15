const express = require("express");

const {
  createHealthCheckup,
} = require("../controllers/healthcontroller");

const healthRoutes = express.Router();

healthRoutes.post("/", createHealthCheckup);

module.exports = healthRoutes;