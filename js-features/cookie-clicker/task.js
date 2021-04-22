'use strict'
const cookieImage = document.getElementById('cookie');
const cookieСounter = document.getElementById('clicker__counter');
const cookieSpeed = document.getElementById('clicker__speed');
let start;
const cookieClick = () => {
    cookieСounter.textContent = +cookieСounter.textContent + 1;
    let end = Date.now();
    if (+cookieСounter.textContent > 1) {
        cookieSpeed.textContent = (1 / ((end - start) / 1000)).toFixed(2); 
    }
    start = end;
    if (+cookieСounter.textContent % 2 !== 0) {
        return cookieImage.width = 300;
    }
    cookieImage.width = 200;
}
cookieImage.onclick = cookieClick;