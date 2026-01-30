import express from 'express';
import Attendance from '../models/Attendance.js';

const router = express.Router();

// Get all attendance records
router.get('/', async (req, res) => {
  const records = await Attendance.find().populate('employee');
  res.json(records);
});

// Add new attendance record
router.post('/', async (req, res) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update attendance record
router.put('/:id', async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(attendance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete attendance record
router.delete('/:id', async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.json({ message: 'Attendance deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
