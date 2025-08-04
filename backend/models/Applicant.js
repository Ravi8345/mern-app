const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  message: String,
});

module.exports = mongoose.model('Applicant', applicantSchema);
