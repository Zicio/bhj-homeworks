'use strict'
const hyperlinks = document.querySelectorAll('.has-tooltip');
const newElement = document.createElement('div');
newElement.classList.add('tooltip');

const getPositionNewElement = (targetElement) => {
    newElement.removeAttribute("style");
    const coord = targetElement.getBoundingClientRect();
    if ((targetElement.dataset.position).localeCompare('top') === 0) {
        newElement.style.left = coord.left +'px';
        newElement.style.top = coord.top - 30 +'px';
        return;
    }
    if ((targetElement.dataset.position).localeCompare('left') === 0) {
        newElement.style.left = coord.left - 175 +'px';
        newElement.style.top = coord.bottom - 25 +'px';
        return;
    }
    if ((targetElement.dataset.position).localeCompare('right') === 0) {
        newElement.style.left = coord.right + 15 +'px';
        newElement.style.top = coord.bottom - 22 +'px';
        return;
    }
    if ((targetElement.dataset.position).localeCompare('bottom') === 0) {
        newElement.style.left = coord.left +'px';
        newElement.style.top = coord.bottom + 5 +'px';
        return;
    }
}

document.addEventListener('click', (e) => {
    const targetElement = e.target;
    if (e.target.classList.contains('has-tooltip')) {
        e.preventDefault();
        if (e.target.querySelector('.tooltip_active')) {
            e.target.querySelector('.tooltip_active').classList.remove('tooltip_active');
            return;
        }
        if (document.querySelector('.tooltip_active')) {
            document.querySelector('.tooltip_active').classList.remove('tooltip_active');
        }
        newElement.innerText = `${e.target.title}`;
        e.target.appendChild(newElement);
        getPositionNewElement(targetElement);
        e.target.querySelector('.tooltip').classList.add('tooltip_active');
    }
})