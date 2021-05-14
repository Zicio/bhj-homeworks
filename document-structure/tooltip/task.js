'use strict'
const hyperlinks = document.querySelectorAll('.has-tooltip');
for (let i = 0; i < hyperlinks.length; i++) {
    const newElement = document.createElement('div');
    newElement.classList.add('tooltip');
    
    
    hyperlinks[i].addEventListener('click', (e) => {
        e.preventDefault();
        hyperlinks[i].appendChild(newElement);
        newElement.innerText = `${hyperlinks[i].title}`
        const hint = document.querySelector('.tooltip');
        hint.classList.toggle('tooltip_active');
    })
}