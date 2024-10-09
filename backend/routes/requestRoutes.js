const express = require('express');
const { getRequests, addRequest, updateRequest, deleteRequest } = require('../controllers/requestController');

const router = express.Router();

router.get('/requests', getRequests);
router.post('/requests', addRequest);
router.patch('/requests/:id', updateRequest);
router.delete('/requests/:id', deleteRequest);

module.exports = router;
