'use strict';
class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.button = container.querySelector('button.button');
    this.time = container.querySelector('.status__time');

    this.start();
    this.registerEvents();

    this.timerId = null;
  }
  
  start() {
    const _this = this;
    const startGo = function(event) {
      _this.button.setAttribute('disabled', 'disabled');
      _this.button.textContent = 'Сыграть заново';
      _this.reset();
      _this.startTimer();
    }
    this.button.addEventListener('click', startGo);
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const _this = this;
    const getKey = function(event) {
      if(_this.currentSymbol.textContent.toUpperCase() === String.fromCodePoint(event.keyCode)) {
        return _this.success();
      }
      return _this.fail();
    }
    document.addEventListener('keyup', getKey);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }
    if (++this.winsElement.textContent === 10) {
      this.stopTimer();
      alert('Победа!');
      this.playAgain();
    }
    else {
      this.setNewWord();
    }
  }

  fail() {
    this.stopTimer();
    if (++this.lossElement.textContent === 5) {
      this.stopTimer();
      alert('Вы проиграли!');
      this.playAgain();
    }
    else {
      this.setNewWord();
      this.startTimer();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
  }

  getWord() {
    const words = [
        'Bob and boy',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  startTimer() {
    const _this = this;
    this.timerId = setInterval(function() {
      _this.time.textContent -= 1;
      if ( +_this.time.textContent === 0) {
      alert('Время вышло');
      _this.fail();
      }
    }, 1000);
  }

  stopTimer() {
    if(this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;
    this.time.textContent = this.wordElement.textContent.length;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  playAgain() {
    this.button.removeAttribute('disabled');
  }
}
new Game(document.getElementById('game'));

