'use strict'
class Popup {
    constructor(container) {
        this.container = container;
        this.modal = container.getElementById('subscribe-modal'); 

        this.showModal();
        this.closeModal();
    }

    showModal() {
        if((document.cookie).localeCompare('modal=close')) {
            this.modal.classList.add('modal_active');
        }
    }

    closeModal() {
        const modalClose = this.modal.querySelector('.modal__close');
        modalClose.addEventListener('click', (e) => {
            this.modal.classList.remove('modal_active');
            document.cookie = 'modal=close; path=/; secure';
        })
    }
}

new Popup(document);