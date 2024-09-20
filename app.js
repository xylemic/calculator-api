const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// addition endpoint
app.post('/api/calculate/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 ||!num2) {
    return res.status(400).json({ error: 'Both numbers are required' });
  }

  const result = num1 + num2;
  res.json({ result });
});

// subtraction endpoint
app.post('/api/calculate/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 ||!num2) {
    return res.status(400).json({ error: 'Both numbers are required' });
  }

  const result = num1 - num2;
  res.json({ result });
});

// multiplication endpoint
app.post('/api/calculate/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 ||!num2) {
    return res.status(400).json({ error: 'Both numbers are required' });
  }

  const result = num1 * num2;
  res.json({ result });
});

// division endpoint
app.post('/api/calculate/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 ||!num2) {
    return res.status(400).json({ error: 'Both numbers are required' });
  }

  if (num2 === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  const result = num1 / num2;
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
