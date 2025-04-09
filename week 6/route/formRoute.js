const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController'); // Correct path for formController

// Route for submitting the form
router.post('/submit-form', formController.submitForm);

// Route for getting all forms
router.get('/forms', formController.getForms);

// Route for getting a single form by ID
router.get('/forms/:id', formController.getFormById);

// Route for updating a form by ID
router.put('/forms/:id', formController.updateForm);

// Route for deleting a form by ID
router.delete('/forms/:id', formController.deleteForm);

module.exports = router;
