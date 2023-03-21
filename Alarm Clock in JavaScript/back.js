let alarm = require('./alarmtime');
const express = require('express');
const app = express();
const router=express.Router();
router.post('/saveAlarm', async (req, res) => {
  const time =req.body.time;
  const Data = new alarm({time:time});
  await Data.save().then((res)=>console.log('added')).catch((err)=>console.log(err));
  console.log(Data)
});
module.exports=router;