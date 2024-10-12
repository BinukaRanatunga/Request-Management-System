const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  requestId: { type: String, required: true },
  createdOn: { type: Date, required: true },
  location: { type: String, required: true },
  service: { type: String, required: true },
  status: {
    type: String,
    enum: ['NEW', 'IN_PROGRESS', 'ON_HOLD', 'REJECTED', 'CANCELLED'],
    required: true
  },
  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
    required: true
  },
  department: { type: String, required: true },
  requestedBy: { type: String, required: true },
  assignedTo: { type: String, required: true }
});

module.exports = mongoose.model('Request', requestSchema);
