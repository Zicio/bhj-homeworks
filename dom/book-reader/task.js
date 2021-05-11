'use strict'
const book = document.getElementById('book');
const fontSize = book.querySelectorAll('.font-size');
const colorControl = book.querySelectorAll('.book__control-color');
const backgroundControl = book.querySelectorAll('.book__control-background');
const color = book.querySelectorAll('.color');

for (let element of fontSize) {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        book.querySelector('.font-size_active').classList.remove('font-size_active');
        element.classList.add('font-size_active');

        if (element.matches('.font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
            return;
        }
        if (element.matches('.font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
            return;
        }
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        return;
    })
}

for (let element of color) {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        element.closest('.book__control').querySelector('.color_active').classList.remove('color_active');
        element.classList.add('color_active');

        if (element.closest('div.book__control_color')) {
            book.style.color = element.getAttribute('data-text-color');
        }
        if (element.closest('div.book__control_background')) {
            book.style.background = element.getAttribute('data-bg-color');
        }
    });
}