const mongoose = require('mongoose')

const healthcheckupSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    website: {
      type: String,
      trim: true,
    },

    businessType: {
      type: String,
      required: true,
      trim: true,
    },

    challenges: {
      type: String,
      required: true,
      trim: true,
    },

    services: {
      type: [String],
      required: true,
    },

    budget: {
      type: String,
      required: true,
    },

    timeline: {
      type: String,
      required: true,
    },   
},
{
    timestamps: true,
}
)
const HealthCheckup = mongoose.model(
  "HealthCheckup",
  healthcheckupSchema
);

module.exports = HealthCheckup;