import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies and allow cross-origin requests
app.use(cors());
app.use(express.json());

// Basic health-check route
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running smoothly' });
});

// Example POST route
app.post('/api/data', (req, res) => {
  const userData = req.body;
  res.status(201).json({ received: userData });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
