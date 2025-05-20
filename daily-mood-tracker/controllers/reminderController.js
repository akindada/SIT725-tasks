const Reminder = require('../models/reminderModel');

// GET /api/reminders - Fetch all reminders
exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ reminderDate: 1 });
    res.status(200).json(reminders);  // <- added status(200)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reminders.' });
  }
};

// POST /api/reminders - Create a new reminder
exports.createReminder = async (req, res) => {
  try {
    const { message, reminderDate } = req.body;

    if (!message || !reminderDate) {
      return res.status(400).json({ error: 'Message and date are required.' });
    }

    const newReminder = new Reminder({ message, reminderDate });
    await newReminder.save();

    res.status(201).json({ message: 'Reminder created', reminder: newReminder });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create reminder.' });
  }
};

// PUT /api/reminders/:id - Update a reminder by ID
exports.updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { message, reminderDate } = req.body;

    const updated = await Reminder.findByIdAndUpdate(
      id,
      { message, reminderDate },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Reminder not found.' });
    }

    res.status(200).json({ message: 'Reminder updated', reminder: updated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update reminder.' });
  }
};

// DELETE /api/reminders/:id - Delete a reminder by ID
exports.deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Reminder.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Reminder not found.' });
    }

    res.status(200).json({ message: 'Reminder deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete reminder.' });
  }
};
