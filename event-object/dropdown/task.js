'use strict'
const list = document.querySelectorAll('ul.dropdown__list');
const value = document.querySelectorAll('div.dropdown__value');
const links = document.querySelectorAll('a.dropdown__link');
for (let i = 0; i < value.length; i++) {
value[i].onclick = () => {list[i].classList.toggle('dropdown__list_active');}
}
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        links[i].closest('ul.dropdown__list').classList.remove('dropdown__list_active');
        links[i].closest('div.dropdown').querySelector('div.dropdown__value').textContent = links[i].textContent.replace(/[\n\s]/g, '');
    })
}
