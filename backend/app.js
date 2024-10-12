const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');  // Add this line
const requestRoutes = require('./routes/requestRoutes');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());  // Enable CORS for all routes
// Or if you want to specify the frontend's origin
// app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

// Routes
app.use('/api', requestRoutes);

module.exports = app;
