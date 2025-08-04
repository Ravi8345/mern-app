const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define Applicant model
const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
});
const Applicant = mongoose.model('Applicant', applicantSchema);

// POST /api/applicants
router.post('/', async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).send(applicant);
  } catch (err) {
    res.status(400).send({ error: 'Failed to save applicant' });
  }
});

// GET /api/applicants
router.get('/', async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch applicants' });
  }
});

module.exports = router;
