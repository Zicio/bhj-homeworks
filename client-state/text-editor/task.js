'use strict'
class Editor {
    constructor(container) {
        this.container = container;
        this.textArea = container.getElementById('editor');
        this.button = container.getElementById('button');

        this.inputText();
        this.reset();
    }

    inputText() {
        if(localStorage.text) {
            this.textArea.innerText = localStorage.text;
        }
        this.textArea.addEventListener('input', (e) => {
            this.textArea.innerText = e.target.value;
            localStorage.clear();
            localStorage.text = e.target.value;
        });
    }

    reset() {
        this.button.addEventListener('click', (e) => {
            this.textArea.value = '';
            localStorage.clear();
        });
    }
}

new Editor(document);