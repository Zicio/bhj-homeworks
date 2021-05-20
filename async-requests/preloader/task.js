'use strict'
const loader = document.getElementById('loader');
const items = document.getElementById('items');
let xhr = new XMLHttpRequest;
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType ='json';
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        loader.classList.remove('loader_active');
        const response = xhr.response.response.Value;
        items.insertAdjacentHTML('beforeend', 
            '<div class="item__code"></div><div class="item__value"></div><div class="item__currency"></div>');
        
    }
})