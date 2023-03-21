const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");
var xhr = new XMLHttpRequest();
xhr.open("POST", yourAPI, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: value
}));


let alarmTime, isAlarmSet,
ringtone = new Audio("./files/ringtone.mp3");

for (let i =23 ; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}


setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
    ;

    h = h == 0 ? h = 0 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s}`;
});

async function setAlarm() {
    if (isAlarmSet) {
      alarmTime = "";
      ringtone.pause();
      content.classList.remove("disable");
      setAlarmBtn.innerText = "Set Alarm";
      isAlarmSet = false;
      // Delete the alarm from the database
      await Alarm.deleteMany({});
    } else {
      let time = `${selectMenu[0].value}:${selectMenu[1].value}`;
      if (time.includes("Hour") || time.includes("Minute")) {
        return alert("Please, select a valid time to set Alarm!");
      }
      alarmTime = time;
      isAlarmSet = true;
      content.classList.add("disable");
      setAlarmBtn.innerText = "Clear Alarm";
      // Save the alarm to the database
      await Alarm.create({ time });
    }
  }
  

setAlarmBtn.addEventListener("click", setAlarm);
