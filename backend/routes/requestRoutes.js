const express = require('express');
const router = express.Router();
const { getRequests, addRequest, updateRequest, deleteRequest, getRequestById } = require('../controllers/requestController');

// Routes for requests
router.get('/requests', getRequests);             // Get all requests
router.post('/requests', addRequest);             // Add a new request
router.get('/requests/:id', getRequestById);      // Get a specific request by ID
router.patch('/requests/:id', updateRequest);     // Update a specific request by ID
router.delete('/requests/:id', deleteRequest);    // Delete a specific request by ID

module.exports = router;
