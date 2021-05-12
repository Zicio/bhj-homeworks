'use strict'
const main = document.querySelector('.interests_main');
const checkbox = main.querySelectorAll('.interest__check');
const check = (element) => {
    if (element.closest('.interests_active')) {
        const parent = element.closest('.interests_active').closest('.interest').querySelector('.interest__check');
        const siblings = element.closest('.interests_active').querySelectorAll('.interest__check');
        if(Array.from(siblings).every(elem => elem.checked === true)) {
            parent.checked = true;
        } 
    }
}

for (const element of checkbox) {
    element.addEventListener('change', () => {
        if (element.closest('.interests').classList.contains('interests_main')) {
            let checkIn = element.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check');
            for (let i = 0; i < checkIn.length; i++) {
                element.checked ? checkIn[i].checked = true : checkIn[i].checked = false;
            }
        }
        check(element);
    })
}
















/*
for (let element of checkbox) {
    element.addEventListener('change', () => {
        const checkIn = element.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check');
        for (let i = 0; i < checkIn.length; i++) {
            element.checked ? checkIn[i].checked = true : checkIn[i].checked = false;
        }
    })
}
*/

