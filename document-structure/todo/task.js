'use strict'
const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const arr = [];

//Функция добавления задачи
const addTask = (el) => {
    tasksList.insertAdjacentHTML('beforeend',
        '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
    const taskTitle = tasksList.querySelectorAll('.task__title');
    taskTitle[taskTitle.length - 1].innerText = `${el}`;
    arr.push(el);
    save();
}

//Функция сохранения данных
const save = () => {
    localStorage.setItem('mySave', JSON.stringify(arr));
}

//Проверка Window.localStorage на наличие сохраненных данных 
if (localStorage.getItem('mySave')) {
    const mySave = JSON.parse(localStorage.getItem('mySave'));
    mySave.forEach(element => {addTask(element)});
}

//Обработчик Инпута
input.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && input.value.trim().length !== 0) {
        addTask(input.value);
        input.value = '';
    }
})

//Обработчик Кнопки
button.addEventListener('click', () => {
    if (input.value.trim().length !== 0) {
        addTask(input.value);
        input.value = '';
    }
})

//Обработчик крестиков
tasksList.addEventListener('click', (e) => {
    const taskTitle = e.target.closest('.task').querySelector('.task__title');
    if (!e.target.classList.contains('task__remove')) {
        return;
    }
    const indexOfDelete = arr.findIndex(element => !element.localeCompare(`${taskTitle.innerText}`))
    arr.splice(indexOfDelete, 1);
    e.target.closest('.task').remove();
    save();
});
