'use strict'
class Auth {
    constructor(container) {
        this.container = container;
        this.signin = document.getElementById('signin');
        this.form = document.getElementById('signin__form');
        this.button = document.getElementById('signin__btn');
        this.welcome = document.getElementById('welcome');
        this.userId = document.getElementById('user_id');
        this.logoutButton = document.getElementById('logout__btn');

        this.showForm();
    }

    showForm() {
        this.signin.classList.add('signin_active');
        this.checkLocalStorage();
    }
    
    checkLocalStorage() {
        if (localStorage.id) {
            this.userId.innerText = localStorage.id;
            this.showWelcome();
            return;
        }
        this.sendForm();
    }

    showWelcome() {
        this.form.style.display = 'none';
        this.welcome.classList.add('welcome_active');
        this.logout();
    }

    logout() {
        this.logoutButton.addEventListener('click', (e) => {
            localStorage.removeItem('id');
            this.welcome.classList.remove('welcome_active');
            this.form.style.display = 'block';
        })
    }

    sendForm() {
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            const formData = new FormData(this.form);
            let xhr = new XMLHttpRequest;
            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
            xhr.responseType ='json';
            xhr.send(formData);
            xhr.addEventListener('load', () => {
            const response = xhr.response;
            this.form.reset();
            this.checkForm(response);
            })
        })
    }

    checkForm(response) {
        if (response.success) {
            localStorage.id = response.user_id;
            this.userId.innerText = response.user_id;
            this.showWelcome();
            return;
        }
        document.body.insertAdjacentHTML('beforeend', 
        '<div class="modal" id="subscribe-modal"><div class="modal__content"><div class="modal__text">Неверный логин/пароль</div><a class="modal__close" href="">Закрыть</a></div></div>');
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal__content');
        const modalClose = document.querySelector('.modal__close');
        modal.setAttribute('style', 'display: flex; justify-content: center; align-items: center; position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5);');
        modalContent.setAttribute('style', 'width: 300px; height: 100px; overflow: auto; background: #fff; position: relative; padding: 20px; box-sizing: border-box; display: flex; justify-content: center; align-items: center; flex-direction: column;');
        modalClose.setAttribute('style', 'margin-top: 20px; margin-left: auto;');
        this.closeModal(modal, modalClose);
    }

    closeModal(modal, modalClose) {
        modalClose.addEventListener('click', (e) => {
            modal.style.display = 'none';
        })
    }
}

new Auth(document);