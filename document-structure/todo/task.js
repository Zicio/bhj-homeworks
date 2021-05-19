'use strict'
const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let task = null;
const arr = [];
let id = 1;

//Функция добавления задачи
const addTask = (el) => {
    tasksList.insertAdjacentHTML('beforeend',
        '<div class="task" data-id=""><a href="#" class="task__remove">&times;</a></div>');
    const newTaskTittle = document.createElement('div');
    newTaskTittle.classList.add('task__title');
    newTaskTittle.innerText = `${el.value.trim()}`;
    task = tasksList.querySelectorAll('.task');
    task[task.length - 1].dataset.id = id;
    id++;
    task[task.length - 1].append(newTaskTittle);
    arr.push(
        {
            id: task[task.length - 1].dataset.id,
            value: el.value
        }
    )
    save();
}

//Функция сохранения данных
const save = () => {
    const saveArr = JSON.stringify(arr);
    localStorage.setItem('mySave', saveArr);
}


//Проверка Window.localStorage на наличие сохраненных данных 
if (localStorage.getItem('mySave')) {
    const mySave = JSON.parse(localStorage.getItem('mySave'));
    mySave.forEach(element => {addTask(element)});
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
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i].id === +e.target.closest('.task').dataset.id) {
            arr.splice(i, 1);
            break;
        }
    }
    e.target.closest('.task').remove();
    save();
  });
