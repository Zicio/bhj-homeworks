'use strict'
const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll ('.tab__content');
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {
        tab[i].closest('.tabs').querySelector('.tab_active').classList.remove('tab_active');
        tabContent[i].closest('.tabs').querySelector('.tab__content_active').classList.remove('tab__content_active');
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    });
}