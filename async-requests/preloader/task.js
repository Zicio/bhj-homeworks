'use strict'
class СurrencyRate {
    constructor( container ) {
        this.container = container;
        this.loader = container.getElementById('loader');
        this.items = container.getElementById('items');
        this.saveArr = [];

        this.checkSaves();
    }

    save() {
        const jsonArr = JSON.stringify(this.saveArr);
        localStorage.setItem('mySave', jsonArr);
    }

    addСurrencyRate(arr) {
        for (let element of arr) {
            this.items.insertAdjacentHTML('beforeend', 
                '<div class="item" data-id =""><div class="item__code"></div><div class="item__value"></div><div class="item__currency">руб.</div></div>');
            const item = this.items.lastChild;
            item.dataset.id = arr.indexOf(element);
            const itemCode = item.querySelector('.item__code');
            const itemValue = item.querySelector('.item__value');
            itemCode.innerText = element.CharCode;
            itemValue.innerText = (+element.Value).toFixed(4);
            this.saveArr.push(
                {
                    id: item.dataset.id,
                    CharCode: itemCode.innerText,
                    Value: itemValue.innerText
                }
            )
        }
        this.save();
    }

    getСurrencyRate() {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
        xhr.responseType ='json';
        xhr.send();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                this.loader.classList.remove('loader_active');
                const valutes = Object.values(xhr.response.response.Valute);
                this.addСurrencyRate(valutes);
            }
        }) 
    }

    checkSaves() {
        if (localStorage.getItem('mySave')) {
            const mySave = JSON.parse(localStorage.getItem('mySave'));
            this.loader.classList.remove('loader_active');
            this.addСurrencyRate(mySave);
            return;
        }
        this.getСurrencyRate();
    }
}

new СurrencyRate(document);