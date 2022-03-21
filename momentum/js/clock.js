const clock = document.querySelector("#today #clock");
const todaysDate = document.querySelector("#today #date");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    const month = date.getMonth()+1;
    const datee = date.getDate();
    const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
    const day = weekday[date.getDay()];

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
    todaysDate.innerText = `${month} / ${datee} ${day}`;
}

getClock();
setInterval(getClock, 1000);

