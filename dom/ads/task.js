'use strict'
const rotator = document.querySelectorAll('.rotator');
for (let i = 0; i < rotator.length; i++) {
    let numberActive = 0;
    const rotatorCase = rotator[i].querySelectorAll('.rotator__case');
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
        clearTimeout(timerId);
        rotationSpeed = +rotatorCase[numberActive].getAttribute('data-speed');
        timerId = setTimeout(rotation, rotationSpeed);
    }
    let timerId = setTimeout(rotation, rotationSpeed);
}