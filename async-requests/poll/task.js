'use strict'
class Poll {
    constructor(container) {
        this.container = container;
        this.pollTitle = container.querySelector('.poll__title');
        this.pollAnswers = container.querySelector('.poll__answers');
        this.recievedId = null;
        this.buttons = this.pollAnswers.querySelectorAll('.poll__answer');

        this.getNewAnswer();
        this.checkResponse();
    }

    getNewAnswer() {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhr.responseType ='json';
        xhr.send();
        xhr.addEventListener('load', () => {
            const receivedTitle = xhr.response.data.title;
            const receivedAnswers = Object.values(xhr.response.data.answers);
            this.recievedId = xhr.response.id;
            this.showNewAnswer(receivedTitle, receivedAnswers);
        })
    }

    showNewAnswer(receivedTitle, receivedAnswers) {
        this.pollTitle.innerText = receivedTitle;
        for (let i = 0; i < receivedAnswers.length; i++) {
            this.pollAnswers.insertAdjacentHTML('beforeend', '<button class="poll__answer" data-id=""></button>');
            this.buttons = this.pollAnswers.querySelectorAll('.poll__answer');
            this.buttons[this.buttons.length - 1].innerText = receivedAnswers[i];
            this.buttons[this.buttons.length - 1].dataset.id = i;
        }
    }

    checkResponse() {
        this.pollAnswers.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('poll__answer')) {
                document.body.insertAdjacentHTML('beforeend', 
                '<div class="modal__substrate"></div><div class="modal">Спасибо, ваш голос засчитан!<button class="modal__button">Закрыть</button></div>');
                const modal = document.querySelector('.modal');
                const modalButton = document.querySelector('.modal__button');
                const modalSubstrate = document.querySelector('.modal__substrate');
                modal.setAttribute('style', 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 5px; border: 1px solid black; border-radius: 10px; z-index: 1000; background: white;');
                modalSubstrate.setAttribute('style', 'z-index: 1; position: fixed; top:0; left:0; width: 100%; height: 100%; background-color: black; opacity: 0.6;')
                modalButton.setAttribute('style', 'display: block; margin-left: auto; margin-top: 30px;');
                const selectedResponse = e.target;
                this.closeModal(modal, modalButton, modalSubstrate, selectedResponse);
            }
        })
    }

    closeModal(modal, modalButton, modalSubstrate, selectedResponse) {
        modalButton.addEventListener('click', () => {
            modal.style.display = 'none';
            modalSubstrate.style.display = 'none';
            this.getResults(selectedResponse);
        })
    }

    getResults(target) {
        let xhr = new XMLHttpRequest;
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.responseType ='json';
        xhr.send(`vote=${this.recievedId}&answer=${target.dataset.id}`);
        xhr.addEventListener('load', () => {
            this.pollAnswers.classList.remove('poll__answers_active');
            const results = xhr.response.stat;
            const sumVotes = results.reduce((accumulator, currentValue) => accumulator + currentValue.votes, 0);
            for (let i = 0; i < results.length; i++) {
                this.pollTitle.insertAdjacentHTML('beforeend', '<div class="result"></div>');
                const resultsList = this.pollTitle.querySelectorAll('.result');
                const percent = (results[i].votes / sumVotes * 100).toFixed(2);
                resultsList[resultsList.length - 1].innerText = `${results[i].answer}: ${percent}%`;
            }
        })
    }
}

new Poll(document.querySelector('.poll'));