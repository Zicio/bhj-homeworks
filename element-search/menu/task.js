'use strict'
const link = document.getElementsByClassName('menu__link');
for (let i = 0; i < link.length; i++) {
    link[i].onclick = () => {  
        //проверка на уже открытое меню при открытии другого
        if (!link[i].closest('li').querySelector('ul.menu_sub').classList.contains('menu_active') && document.getElementsByClassName('menu_active').length !== 0) {
            document.getElementsByClassName('menu_active')[0].classList.remove('menu_active');
            link[i].closest('li').querySelector('ul.menu_sub').classList.add('menu_active');
        }
        //проверка на уже открытое меню при открытии этого же меню
        else if (link[i].closest('li').querySelector('ul.menu_sub').classList.contains('menu_active')) {
            link[i].closest('li').querySelector('ul.menu_sub').classList.remove('menu_active');
        }
        //открытие меню
        else {
            link[i].closest('li').querySelector('ul.menu_sub').classList.add('menu_active');
        }
        return false;
    }
}
