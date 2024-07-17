const express = require('express');
const app = express();
const PORT = 5000;

let visitCounter = 0;

app.get('/count', (req, res) => {
  visitCounter++;
  res.send(`Page has been visited ${visitCounter} times`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

