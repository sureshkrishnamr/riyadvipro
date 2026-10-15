const HealthCheckup = require("../models/healthcheckup");

const createHealthCheckup = async (req, res) => {
    console.log(req.body);
    
  try {
    const {
      name,
      email,
      company,
      website,
      businessType,
      challenges,
      services,
      budget,
      timeline,
    } = req.body;

    // Required field validation
    if (
      !name ||
      !email ||
      !company ||
      !businessType ||
      !challenges ||
      !services ||
      !budget ||
      !timeline
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Make sure services is an array
    if (!Array.isArray(services) || services.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please select at least one service",
      });
    }

    const healthCheckup = await HealthCheckup.create({
      name,
      email,
      company,
      website,
      businessType,
      challenges,
      services,
      budget,
      timeline,
    });

    return res.status(201).json({
      success: true,
      message: "Business health checkup submitted successfully",
      data: healthCheckup,
    });
  } catch (error) {
    console.error("Health Checkup Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  createHealthCheckup,
};