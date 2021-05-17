'use strict'
const hyperlinks = document.querySelectorAll('.has-tooltip');
for (let i = 0; i < hyperlinks.length; i++) {
    const newElement = document.createElement('div');
    newElement.classList.add('tooltip');
    newElement.setAttribute('style', 'position: absolute; width: max-content');
    if ((hyperlinks[i].dataset.position).localeCompare('top') === 0) {
        newElement.style.left = '0';
        newElement.style.top = '-30px';
    }
    if ((hyperlinks[i].dataset.position).localeCompare('left') === 0) {
        newElement.style.right = '102%';
        newElement.style.top = '-5px';
    }
    if ((hyperlinks[i].dataset.position).localeCompare('right') === 0) {
        newElement.style.left = '102%';
        newElement.style.top = '-5px';
    }
    if ((hyperlinks[i].dataset.position).localeCompare('bottom') === 0) {
        newElement.style.left = '0';
    }
    hyperlinks[i].style.position = 'relative';

    hyperlinks[i].addEventListener('click', (e) => {
        e.preventDefault();
        hyperlinks[i].appendChild(newElement);
        newElement.innerText = `${hyperlinks[i].title}`;
        const hint = hyperlinks[i].querySelector('.tooltip');
        if (hyperlinks[i].querySelector('.tooltip_active') || !document.querySelector('.tooltip_active')) {
        hint.classList.toggle('tooltip_active');
        }
    })
}