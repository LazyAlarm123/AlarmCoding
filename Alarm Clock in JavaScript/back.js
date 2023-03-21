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

router.delete('/del/:_id', async (req,res) => {
  try {
    const check = await alarm.findOne({id : req.body.id})

      await alarm.findOneAndRemove({id : req.body.id});
      res.send("delete");}
      catch (e) {
        response.status(500).send({ message: e.message });}}
   );
router.get('/all', async (req,res) =>{
  alarm.find().then((a)=>res.json(a)).catch((err)=>console.log(err));
})


