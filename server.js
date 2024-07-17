const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

let visitCounter = 0;

app.use(cors({ origin: '*' }));

app.get('/api', (req, res) => {
  console.log("Bop");
  res.send("In the future, I will say what the API can do here.");
});

app.get('/api/count', (req, res) => {
  // if req is from dev.adrucker.com, then don't increment the counter
  if (req.hostname !== 'dev.adrucker.com') {
    visitCounter++;
  }
  res.send(`Page has been visited ${visitCounter} times`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

