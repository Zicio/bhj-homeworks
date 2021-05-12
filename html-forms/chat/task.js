'use strict'
const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', (e) => {
    chatWidget.classList.add('chat-widget_active');
});
const answers = ['Добрый день!', 'Ничего не знаю!', 'До свидания!']
const messages = document.getElementById('chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages-container');
input.addEventListener('keydown', (e) => {
    if(e.code === 'Enter' && e.target.value.length !== 0) {
        const date = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
                <div class="message__text">${e.target.value}</div>
            </div>
            <div class="message">
                <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
                <div class="message__text">${answers[Math.floor(Math.random() * answers.length)]}</div>
            </div>
        `;
        chatContainer.scrollTop = messages.scrollHeight;
        e.target.value = '';
        clearTimeout(timerId);
        start();
    }
})

let timerId = null;
const start = () => {
    timerId = setInterval(() => {   
        const date = new Date();
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">Не спи!!</div>
        </div>
        `; 
        chatContainer.scrollTop = messages.scrollHeight;
    }, 30000);
}
input.addEventListener('focus', start)

input.addEventListener('input', () => {
    clearInterval(timerId);
    start();
})
