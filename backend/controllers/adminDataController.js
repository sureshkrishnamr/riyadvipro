

// =================================
// Get all contacts
// =================================

const contact = require("../models/contact");
const HealthCheckup = require("../models/healthcheckup");

const getContacts = async (req, res) => {
  console.log("Get contacts");
  
  try {
    const contacts = await contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });

  } catch (error) {
    console.error("Get Contacts Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// =================================
// Get all health checkups
// =================================

const getHealthCheckups = async (req, res) => {
  console.log("Healthcheckups");
  
  try {
    const healthCheckups = await HealthCheckup.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: healthCheckups.length,
      data: healthCheckups,
    });

  } catch (error) {
    console.error(
      "Get Health Checkups Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// =================================
// Dashboard statistics
// =================================

const getStats = async (req, res) => {
  console.log("get stats");
  
  try {
    const contactCount = await contact.countDocuments();

    const healthCheckupCount =
      await HealthCheckup.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalContacts: contactCount,
        totalHealthCheckups: healthCheckupCount,
      },
    });

  } catch (error) {
    console.error("Get Stats Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


module.exports = {
  getContacts,
  getHealthCheckups,
  getStats,
};