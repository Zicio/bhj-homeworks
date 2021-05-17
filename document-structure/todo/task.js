'use strict'
const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})
input.addEventListener('keydown', (e) => {
    if (e.code === 'Enter' && e.target.value.length !== 0) {
        tasksList.insertAdjacentHTML('beforeend',
        '<div class="task"><a href="#" class="task__remove">&times;</a></div>');
        const newTaskTittle = document.createElement('div');
        newTaskTittle.classList.add('task__title');
        newTaskTittle.innerText = `${e.target.value}`;
        const task = tasksList.querySelectorAll('.task');
        task[task.length - 1].append(newTaskTittle);
        e.target.value = '';
    }
})