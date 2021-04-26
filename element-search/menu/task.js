'use strict'
const link = document.querySelectorAll('li a');
for (let i = 0; i < link.length; i++) {
    link[i].onclick = () => {  
        //проверка на уже открытое меню при открытии другого
        if (!link[i].closest('li').querySelector('ul.menu_sub').classList.contains('menu_active') && link[i].closest('ul').querySelector('ul.menu_active')) {
            link[i].closest('ul').querySelector('ul.menu_active').classList.remove('menu_active');
        }
        link[i].closest('li').querySelector('ul.menu_sub').classList.toggle('menu_active');
        return false;
    }
}
