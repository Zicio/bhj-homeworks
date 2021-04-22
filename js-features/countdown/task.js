'use strict'
//Усложненный вариант
const changeTime = () => {
    const timer = document.getElementById('timer');
    let hours = timer.textContent.substring(0, 2);
    let minutes = timer.textContent.substring(3, 5);
    let seconds = timer.textContent.substring(6, 8);
    let time = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    time -= 1;
    hours = parseInt( time / 3600 ) % 24;
    minutes = parseInt( time / 60 ) % 60;
    seconds = time % 60;
    timer.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds  < 10 ? "0" + seconds : seconds}`; 
    if (time === 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
        document.location.assign('https://nodejs.org/dist/v14.16.1/node-v14.16.1-x64.msi');
    }
}
const timerId = setInterval(changeTime, 1000);

//Простой вариант
/*
const changeTime = () => {
    const time = document.getElementById('timer');
    time.textContent -= 1;
    if (+time.textContent === 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
        document.location.assign('https://nodejs.org/dist/v14.16.1/node-v14.16.1-x64.msi');
    }
}
const timerId = setInterval(changeTime, 1000);
*/