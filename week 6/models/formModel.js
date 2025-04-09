const mongoose = require('mongoose');

// Define the schema for a form
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Create and export the Form model
module.exports = mongoose.model('Form', formSchema);
