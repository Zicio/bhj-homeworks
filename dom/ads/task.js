'use strict'
const rotator = document.querySelectorAll('.rotator');
let numberActive = 0;
/*for (let i = 0; i < rotator.length; i++) {
    let rotatorCase = rotator[i].querySelectorAll('.rotator__case');
    let rotationSpeed = +rotatorCase[numberActive].getAttribute('data-speed');
    rotatorCase[numberActive].style.color = rotatorCase[numberActive].getAttribute('data-color');
    const rotation = () => {
        rotatorCase[numberActive].classList.remove('rotator__case_active');
        if (numberActive === rotatorCase.length - 1) {
            numberActive = 0;
        }
        else {
            numberActive += 1;
        }
        rotatorCase[numberActive].style.color = rotatorCase[numberActive].getAttribute('data-color');
        rotatorCase[numberActive].classList.add('rotator__case_active');
        rotationSpeed = +rotatorCase[numberActive].getAttribute('data-speed');
        clearTimeout(timerId);
        timerId = setTimeout(rotation, rotationSpeed);
    }
    let timerId = setTimeout(rotation, rotationSpeed);
}*/



/*
const rotator = document.querySelectorAll('.rotator__case');
let numberActive = 0;
let rotationSpeed = +rotator[numberActive].getAttribute('data-speed');
rotator[numberActive].style.color = rotator[numberActive].getAttribute('data-color');
const rotation = () => {
    rotator[numberActive].classList.remove('rotator__case_active');
    if (numberActive === rotator.length - 1) {
        numberActive = 0;
    }
    else {
        numberActive += 1;
    }
    rotator[numberActive].style.color = rotator[numberActive].getAttribute('data-color');
    rotator[numberActive].classList.add('rotator__case_active');
    rotationSpeed = +rotator[numberActive].getAttribute('data-speed');
    clearTimeout(timerId);
    timerId = setTimeout(rotation, rotationSpeed);
}
let timerId = setTimeout(rotation, rotationSpeed);
*/