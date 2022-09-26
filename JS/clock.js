const clock = document.querySelector("#clock");

function getDate(){
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2, "0");
    const Minutes = String(date.getMinutes()).padStart(2, "0");
    const Seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${Hours} : ${Minutes} : ${Seconds}`;
}

getDate();
setInterval(getDate, 1000);