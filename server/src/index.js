require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Pool (PostgreSQL)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Basic Routes
app.get('/', (req, res) => {
  res.json({ message: "Todo API is running" });
});

// Port listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
