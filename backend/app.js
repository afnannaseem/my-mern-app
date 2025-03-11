const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);

// MongoDB Connection
mongoose
  .connect('mongodb://mongo:27017/mern-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Health Check Route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start the server
app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
