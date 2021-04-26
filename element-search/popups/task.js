'use strict'
const modal = document.getElementsByClassName('modal');
const close = document.getElementsByClassName('modal__close_times');
const success = document.querySelector('a.show-success');
document.getElementById('modal_main').classList.add('modal_active');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = () => {
        modal[i].classList.remove('modal_active');
    }
}
success.onclick = () => {
    for (let i = 0; i < modal.length; i++) {
        modal[i].classList.toggle('modal_active');
    }
}