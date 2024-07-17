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

/** 
 * This endpoint will return the number of times the page has been visited.
 * If the query param noincrement is set to true, the counter will not be incremented.
 * If the query param type is set to json, the response will be in JSON format.
 * eg. /api/count?type=json&noincrement=true
 **/
app.get('/api/count', (req, res) => {
  // if req is from dev.adrucker.com, then don't increment the counter
  
  if (req.hostname !== 'dev.adrucker.com' && req.query.noincrement !== 'true') {
    visitCounter++;
  }
  // check query param return type
  if (req.query.type === 'json') {
    res.json({ count: visitCounter }); // for use in the react app
  } else {
    res.send(`Page has been visited ${visitCounter} times`); // for testing the API endpoint
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

