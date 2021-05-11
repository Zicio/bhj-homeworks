'use strict'
const rotator = document.querySelectorAll('.rotator');
for (let element of rotator) {
    let numberActive = 0;
    const rotatorCase = element.querySelectorAll('.rotator__case');
    let rotationSpeed = +rotatorCase[numberActive].getAttribute('data-speed');
    rotatorCase[numberActive].style.color = rotatorCase[numberActive].getAttribute('data-color');
    const rotation = () => {
        rotatorCase[numberActive].classList.remove('rotator__case_active');
        numberActive += 1;
        if (numberActive === rotatorCase.length) {
            numberActive = 0;
        }
        rotatorCase[numberActive].style.color = rotatorCase[numberActive].getAttribute('data-color');
        rotatorCase[numberActive].classList.add('rotator__case_active');
        clearTimeout(timerId);
        rotationSpeed = +rotatorCase[numberActive].getAttribute('data-speed');
        timerId = setTimeout(rotation, rotationSpeed);
    }
    let timerId = setTimeout(rotation, rotationSpeed);
}