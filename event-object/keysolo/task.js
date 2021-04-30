'use strict';
class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.time = container.querySelector('.status__time');

    this.reset();
    this.start();
    this.registerEvents();

    this.timeId = null;
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
      this.stop();
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      this.stop();
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
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

  start() {
    const _this = this;
    this.timeId = setInterval(function() {
      _this.time.textContent -= 1;
      if ( +_this.time.textContent === 0) {
      _this.stop();
      alert('Вы проиграли!');
      _this.reset();
      _this.setNewWord();
      }
    }, 1000);
  }

  stop() {
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
}
new Game(document.getElementById('game'));

