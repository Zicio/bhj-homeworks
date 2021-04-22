'use strict'
const dead = document.getElementById('dead');
const miss = document.getElementById('lost');
const getHole = (index) => document.getElementById(`hole${index}`);
for (let index = 1; index < 10; index++) {
    const checkWin = () => {
        if (getHole(index).className.includes('hole_has-mole')) {
            dead.textContent = +dead.textContent + 1;
        }
        else{
            miss.textContent = +miss.textContent + 1;
        }
        if (+dead.textContent === 10) {
            alert('Вы победили!');
            dead.textContent = 0;
            miss.textContent = 0;
        }
        if (+miss.textContent === 5) {
            alert('Вы проиграли!');
            dead.textContent = 0;
            miss.textContent = 0;
        }
    }
    getHole(index).onclick = checkWin;
}