'use strict'
const book = document.getElementById('book');
const fontSize = book.querySelectorAll('.font-size');
const colorControl = book.querySelectorAll('.book__control-color');
const backgroundControl = book.querySelectorAll('.book__control-background');
const color = book.querySelectorAll('.color');

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', (event) => {
        event.preventDefault();
        book.querySelector('.font-size_active').classList.remove('font-size_active');
        fontSize[i].classList.add('font-size_active');
        if (fontSize[i].matches('.font-size_small')) {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
            return;
        }
        if (fontSize[i].matches('.font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
            return;
        }
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        return;
    })
}
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', (event) => {
        event.preventDefault();
        color[i].closest('.book__control').querySelector('.color_active').classList.remove('color_active');
        color[i].classList.add('color_active');
        ///////////////////////////////////////////////
        if (color[i].matches('.text_color_black')) {
            book.classList.remove('book_color-gray');
            book.classList.remove('book_color-whitesmoke');
            book.classList.add('book_color-black');
            return;
        }
        if (color[i].matches('.font-size_big')) {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
            return;
        }
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
        return;
/////////////////////////////////////////////////////////
    });
}