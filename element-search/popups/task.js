'use strict'
const main = document.getElementsByClassName('modal');
const close = document.getElementsByClassName('modal__close_times');
const success = document.getElementsByClassName('show-success');
main[0].classList.add('modal_active');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = () => {
        main[i].classList.remove('modal_active');
    }
}
success[0].onclick = () => {
    main[0].classList.remove('modal_active');
    main[1].classList.add('modal_active');
}