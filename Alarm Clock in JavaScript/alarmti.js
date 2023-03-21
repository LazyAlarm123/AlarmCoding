const express = require('express');
const app = express();

app.get('/alarm/:time', (req, res) => {
  const { time } = req.params;
  console.log(`Alarm set for ${time}`);
  res.send(`Alarm set for ${time}`);
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});