'use strict'
const reveal = document.querySelectorAll('.reveal');
for (let element of reveal) {
    window.addEventListener('scroll', () => {
        const viewportHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < viewportHeight) {
            element.classList.add('reveal_active');
        }
    });
}