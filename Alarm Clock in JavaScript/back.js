const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const port = process.env.PORT || 4000;



app.get('/setAlarm', async (req, res) => {
  let time = `${req.query.hour}:${req.query.minute}`;
  if (time.includes("Hour") || time.includes("Minute")) {
    return res.status(400).send("Please, select a valid time to set Alarm!");
  }

  // Save the alarm to the database
  await Alarm.create({ time });

  res.send("Alarm set successfully!");
});

app.get('/clearAlarm', async (req, res) => {
  // Delete the alarm from the database
  await Alarm.deleteMany({});

  res.send("Alarm cleared successfully!");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});