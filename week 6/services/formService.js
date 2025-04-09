const Form = require('../models/formModel'); // Import the form model

exports.createForm = async (formData) => {
  try {
    const form = new Form(formData);
    return await form.save(); // Save the form to the database
  } catch (err) {
    throw new Error('Error creating form: ' + err.message);
  }
};

exports.getAllForms = async () => {
  try {
    return await Form.find(); // Fetch all forms from the database
  } catch (err) {
    throw new Error('Error fetching forms: ' + err.message);
  }
};

exports.getFormById = async (id) => {
  try {
    return await Form.findById(id); // Find form by ID
  } catch (err) {
    throw new Error('Error finding form: ' + err.message);
  }
};

exports.updateForm = async (id, updatedData) => {
  try {
    return await Form.findByIdAndUpdate(id, updatedData, { new: true }); // Update form by ID
  } catch (err) {
    throw new Error('Error updating form: ' + err.message);
  }
};

exports.deleteForm = async (id) => {
  try {
    return await Form.findByIdAndDelete(id); // Delete form by ID
  } catch (err) {
    throw new Error('Error deleting form: ' + err.message);
  }
};
