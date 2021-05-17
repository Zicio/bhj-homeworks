'use strict'
const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let task = null;
const arr = [];

//Функция добавления задачи
const addTask = (el) => {
    tasksList.insertAdjacentHTML('beforeend',
        '<div class="task"><a href="#" class="task__remove">&times;</a></div>');
    const newTaskTittle = document.createElement('div');
    newTaskTittle.classList.add('task__title');
    newTaskTittle.innerText = `${el.value.trim()}`;
    task = tasksList.querySelectorAll('.task');
    task[task.length - 1].append(newTaskTittle);
    arr.push(
        {
            id: task.length,
            value: el.value
        }
    )
    const saveArr = JSON.stringify(arr);
    localStorage.setItem("mySave", saveArr);
}

//Проверка Window.localStorage на наличие сохраненных данных 
if (localStorage.getItem('mySave')) {
    const save = JSON.parse(localStorage.getItem('mySave'));
    save.forEach(element => {addTask(element)});
}

//Обработчик Инпута
input.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && e.target.value.length !== 0) {
        addTask(input);
        input.value = '';
    }
})

//Обработчик Кнопки
button.addEventListener('click', () => {
    if (input.value.length !== 0) {
        addTask(input);
        input.value = '';
    }
})

//Обработчик крестиков
tasksList.addEventListener('click', (e) => {
    if (!e.target.classList.contains('task__remove')) {
      return;
    }
    e.target.closest('.task').remove();
  });
