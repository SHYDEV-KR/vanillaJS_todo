const clock = document.querySelector("#clockContainer #clock");


function runClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hour}:${minute}:${second}`;
}

runClock();
setInterval(runClock, 1000);