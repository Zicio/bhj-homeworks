'use strict'
class Download {
    constructor(container) {
        this.container = container;
        this.progress = container.getElementById('progress');
        this.form = container.getElementById('form');

        this.sendFile();
    }

    sendFile() {
        this.form.addEventListener('submit', (e) => {
            const formData = new FormData(this.form);
            let xhr = new XMLHttpRequest;
            xhr.upload.onprogress = (event) => {
                this.progress.value = event.loaded / event.total;
            }
            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
            xhr.send(formData);
            e.preventDefault();
        });
    }
}

new Download(document);

