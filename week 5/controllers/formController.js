const formService = require('../services/formService');

exports.submitForm = async (req, res) => {
  try {
    const formData = req.body; // Extract the form data from the request body
    const newForm = await formService.createForm(formData); // Assuming createForm is a method in your formService
    res.status(201).json(newForm); // Respond with the created form
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getForms = async (req, res) => {
  try {
    const forms = await formService.getAllForms();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFormById = async (req, res) => {
  try {
    const form = await formService.getFormById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateForm = async (req, res) => {
  try {
    const updatedForm = await formService.updateForm(req.params.id, req.body);
    if (!updatedForm) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json(updatedForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const deletedForm = await formService.deleteForm(req.params.id);
    if (!deletedForm) {
      return res.status(404).json({ message: 'Form not found' });
    }
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
