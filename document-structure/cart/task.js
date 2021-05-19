'use strict'
const cart = document.querySelector('.cart');
const products = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');
//задать вопрос про переопределение переменных
let addedProducts = cartProducts.querySelectorAll('.cart__product');
const arr = [];
let timerId = null;

//Функция показа корзины
const visibleCart = () => {
    if(addedProducts.length) {
        cart.style.visibility = 'visible';
        return;
    }
    cart.style.visibility = 'hidden';
}

//Функция изменения кол-ва товара
const changingQuantity = (e) => {
    const productQuantity = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if(e.target.classList.contains('product__quantity-control_dec') && +productQuantity.innerText > 0) {
        return productQuantity.innerText = +productQuantity.innerText - 1;
    }
    if(e.target.classList.contains('product__quantity-control_inc')) {
        return productQuantity.innerText = +productQuantity.innerText + 1;
    }
}

//Функция добавления в массив сохранения
const pushArr = (addedProducts, productImage, productCount) => {
    arr.push(
        {
            id: addedProducts[addedProducts.length - 1].dataset.id,
            image: productImage[productImage.length - 1].src,
            value: productCount[productImage.length - 1].textContent
        }
    )
}

//Функция добавления товара в корзину
const addProductToCart = (parent) => {
    const productCountValue = +parent.querySelector('.product__quantity-value').textContent;
    for (const element of addedProducts) {
        const cartProductCountValue = +element.querySelector('.cart__product-count').textContent;
        if (+parent.dataset.id === +element.dataset.id) {
            element.querySelector('.cart__product-count').innerText = cartProductCountValue + productCountValue;
            for (let i = 0; i < arr.length; i++) {
                if(+arr[i].id === +parent.dataset.id) {
                    arr[i].value = +element.querySelector('.cart__product-count').textContent;
                    break;
                }
            }
        return;  
        }
    }
    cartProducts.insertAdjacentHTML('beforeend', 
    '<div class="cart__product" data-id=""><img class="cart__product-image" src=""><div class="cart__product-count"></div><a href="#" class="cart__product-delete">&times;</a></div>');
    addedProducts = cartProducts.querySelectorAll('.cart__product');
    addedProducts[addedProducts.length - 1].dataset.id = parent.dataset.id;
    const productImage = cartProducts.querySelectorAll('.cart__product-image');
    productImage[productImage.length - 1].src = parent.querySelector('.product__image').src;
    const productCount = cartProducts.querySelectorAll('.cart__product-count');
    productCount[productImage.length - 1].innerText = productCountValue;

    pushArr(addedProducts, productImage, productCount);
}

//Функция визуализации перемещения товара в корзину
const moveImage = (e, parent) => {
    const image = e.target.closest('.product').querySelector('.product__image'); 
    const imageCoord = image.getBoundingClientRect();
    const cloneImage = image.cloneNode(false);
    cloneImage.style.position = 'fixed';
    cloneImage.style.left = imageCoord.left + 'px';
    cloneImage.style.top = imageCoord.top + 'px';
    parent.insertBefore(cloneImage, image);

    const cartProduct = cartProducts.querySelectorAll('.cart__product');
    let imageInCart = null;
    for (const element of cartProduct) {
        if (!parent.getAttribute('data-id') === !element.getAttribute('data-id')) {
            imageInCart = element.querySelector('.cart__product-image');
            break;
        } 
    }
    const imageInCartCoord = imageInCart.getBoundingClientRect();
    const cloneImageCoord = cloneImage.getBoundingClientRect();
    timerId = setInterval(() => {
        //const differenceY = imageCoord.y - imageInCartCoord.y;
        //const differenceX = imageInCartCoord.x - imageCoord.x;
        cloneImageCoord.top = imageCoord.top - '10px';
    }, 1000)

}

//Функция сохранения корзины
const saveCart = () => {
    const saveArr = JSON.stringify(arr);
    localStorage.setItem('myCart', saveArr);
}

//Проверка Window.localStorage на наличие сохраненных данных
if (localStorage.getItem('myCart')) {
    const myCart = JSON.parse(localStorage.getItem('myCart'));
    myCart.forEach(element => {
        cartProducts.insertAdjacentHTML('beforeend', 
            '<div class="cart__product" data-id=""><img class="cart__product-image" src=""><div class="cart__product-count"></div><a href="#" class="cart__product-delete">&times;</a></div>');
        addedProducts = cartProducts.querySelectorAll('.cart__product');
        addedProducts[addedProducts.length - 1].dataset.id = element.id;
        const productImage = cartProducts.querySelectorAll('.cart__product-image');
        productImage[productImage.length - 1].src = element.image;
        const productCount = cartProducts.querySelectorAll('.cart__product-count');
        productCount[productImage.length - 1].innerText = element.value;
        visibleCart();
        pushArr(addedProducts, productImage, productCount);
    });
}

//Обработчик кнопок +/-
products.addEventListener('click', (e) => {
    if(e.target.classList.contains('product__quantity-control')) {
        changingQuantity(e);

    }
})

//Обработчик кнопки "Добавить в корзину"
products.addEventListener('click', (e) => {
    const parent = e.target.closest('.product');
    if(e.target.classList.contains('product__add') && +parent.querySelector('.product__quantity-value').textContent !== 0) {
        addProductToCart(parent);
        visibleCart();
        moveImage(e, parent);
        saveCart();
        parent.querySelector('.product__quantity-value').innerText = 0;
    }
})

//Обработчик кнопок "Удалить товар из корзины"
cartProducts.addEventListener('click', (e) => {
    const cartParent = e.target.closest('.cart__product');
    if(e.target.classList.contains('cart__product-delete')) {
        cartParent.remove();
        addedProducts = cartProducts.querySelectorAll('.cart__product');
        visibleCart();
        // Возвращает "-1" почему-то. Поэтому сделал через цикл
        //const index = arr.findIndex(elem => {elem.id === parent.dataset.id});
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === cartParent.dataset.id) {
                arr.splice(i, 1);
                break;
            }
        }
        saveCart();
    }
})