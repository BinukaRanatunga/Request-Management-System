const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const requestRoutes = require('./routes/requestRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', requestRoutes);

module.exports = app;
