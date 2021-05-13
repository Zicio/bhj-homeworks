'use strict'
const checkbox = document.querySelectorAll('.interest__check');
const check = (elem) => {
    if (elem.closest('.interests_active')) {
        const parent = elem.closest('.interests_active').closest('.interest').querySelector('.interest__check');
        const siblings = elem.closest('.interests_active').querySelectorAll('.interest__check');
        if(Array.from(siblings).every(elem => elem.checked === true)) {
            parent.checked = true;
            parent.indeterminate = false;
        }
        else if(Array.from(siblings).every(elem => elem.checked === false)) {
            parent.indeterminate = false;
            parent.checked = false;
        }
        else {
            parent.indeterminate = true;
        }

        if (parent.closest('.interests_active')) {
            const grandParent = parent.closest('.interests_active');
            check(grandParent);
        }
    }
}

for (const element of checkbox) {
    element.addEventListener('change', () => {
        const label = element.closest('.interest');
        const children = label.querySelectorAll('.interest__check');
        for (let i = 0; i < children.length; i++) {
            element.checked ? children[i].checked = true : children[i].checked = false;
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

