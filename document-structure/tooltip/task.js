'use strict'
const hyperlinks = document.querySelectorAll('.has-tooltip');

const setCoordTooltip = (element, newElement) => {
    if ((element.dataset.position).localeCompare('top') === 0) {
        newElement.style.left = '0';
        newElement.style.top = '-30px';
        return;
    }
    if ((element.dataset.position).localeCompare('left') === 0) {
        newElement.style.right = '102%';
        newElement.style.top = '-5px';
        return;
    }
    if ((element.dataset.position).localeCompare('right') === 0) {
        newElement.style.left = '102%';
        newElement.style.top = '-5px';
        return;
    }
    if ((element.dataset.position).localeCompare('bottom') === 0) {
        newElement.style.left = '0';
        return;
    }
}

for (const element of hyperlinks) {
    const newElement = document.createElement('div');
    newElement.classList.add('tooltip');
    newElement.setAttribute('style', 'position: absolute; width: max-content');
    element.style.position = 'relative';
    newElement.innerText = `${element.title}`;
    element.appendChild(newElement);
    setCoordTooltip(element, newElement);
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('has-tooltip')) {
        e.preventDefault();
        const hint = e.target.querySelector('.tooltip');
        if (e.target.querySelector('.tooltip_active') || !document.querySelector('.tooltip_active')) {
        hint.classList.toggle('tooltip_active');
        }
    }
})
