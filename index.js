const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const date = new Date();

const day = date.getDay();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[day];
document.querySelector(".day").innerHTML = currentDay;

setInterval(() => {
    const date = new Date();

    const Hour = date.getUTCHours();
    const Minute = date.getUTCMinutes();
    const Seconds = date.getUTCSeconds();

    hour.innerHTML = Hour;
    min.innerHTML = Minute;
    sec.innerHTML = Seconds;
},1000);