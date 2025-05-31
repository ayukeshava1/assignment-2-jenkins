const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This is a sample Node.js app for Jenkins deployment.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
   console.log(`this is jeninks assignment 1`);
});

