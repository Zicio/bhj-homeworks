'use strict'
const products = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');
//задать вопрос про переопределение переменных
let addedProducts = cartProducts.querySelectorAll('.cart__product');

//Функция изменения кол-ва товара
const changingQuantity = (e) => {
    const productQuantity = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if(e.target.classList.contains('product__quantity-control_dec') && productQuantity.textContent > 0) {
        return productQuantity.innerText = +productQuantity.textContent - 1;
    }
    if(e.target.classList.contains('product__quantity-control_inc')) {
        productQuantity.innerText = +productQuantity.textContent + 1;
        return;
    }
}

//Функция добавления товара в корзину
/*const addProductToCart = (e) => {
    const parent = e.target.closest('.product');
    const addedProducts = cartProducts.querySelectorAll('.cart__product');
    for (const element of addedProducts) {
        if (+parent.dataset.id === +element.dataset.id) {
            element.querySelector('.cart__product-count').innerText = +element.querySelector('.cart__product-count').textContent + +parent.querySelector('.product__quantity-value').textContent;
            return;
        }
    }
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.setAttribute('data-id', `${parent.dataset.id}`);
    cartProducts.append(cartProduct);
    const cartProductList = document.querySelectorAll('.cart__product');
    const productImage = document.createElement('img');
    productImage.classList.add('cart__product-image');
    productImage.setAttribute('src', `${parent.querySelector('.product__image').src}`);
    cartProductList[cartProductList.length - 1].append(productImage);
    const productCount = document.createElement('div');
    productCount.classList.add('cart__product-count');
    productCount.innerText = parent.querySelector('.product__quantity-value').textContent;
    cartProductList[cartProductList.length - 1].append(productCount);
}*/

//Альт-функция добавления товара в корзину
const addProductToCart = (e) => {
    const parent = e.target.closest('.product');
    for (const element of addedProducts) {
        if (+parent.dataset.id === +element.dataset.id) {
            element.querySelector('.cart__product-count').innerText = +element.querySelector('.cart__product-count').textContent + +parent.querySelector('.product__quantity-value').textContent;
            return;
        }
    }
    cartProducts.insertAdjacentHTML('beforeend', 
    '<div class="cart__product" data-id=""><img class="cart__product-image" src=""><div class="cart__product-count"></div></div>'
    )
    addedProducts = cartProducts.querySelectorAll('.cart__product');
    addedProducts[addedProducts.length -1].dataset.id = parent.dataset.id;
    const productImage = cartProducts.querySelectorAll('.cart__product-image');
    productImage[productImage.length -1].src = parent.querySelector('.product__image').src;
    const productCount = cartProducts.querySelectorAll('.cart__product-count');
    productCount[productImage.length -1].innerText = parent.querySelector('.product__quantity-value').textContent;
}


//Обработчик кнопок +/-
products.addEventListener('click', (e) => {
    if(e.target.classList.contains('product__quantity-control')) {
        changingQuantity(e);
    }
})

//Обработчик кнопки "Добавить в корзину"
products.addEventListener('click', (e) => {
    if(e.target.classList.contains('product__add')) {
        addProductToCart(e);
    }
})