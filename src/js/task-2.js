"use strict"

/*
* Завдання 2
* Калькулятор валют
* */
class CurrencyConverter {
    constructor() {
        this.change = document.querySelector('[name=change]');
        this.receive = document.querySelector('[name=receive]');
        this.changeSelect = document.querySelector('#changing-select');
        this.receiveSelect = document.querySelector('#receive-select');
        this.content = document.querySelector('.content');
        this.getCurrencyAPI = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    }

    basic() {
        this.changeSelect.insertAdjacentHTML('beforeend', `<option value="1">UAH</option>`);
        this.receiveSelect.insertAdjacentHTML('beforeend', `<option value="1">UAH</option>`);
    }

    getData() {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);

                data.forEach(item => {
                    if (item.ccy !== 'BTC') {
                        this.changeSelect.insertAdjacentHTML('beforeend', `<option value="${item.buy}">${item.ccy}</option>`);
                        this.receiveSelect.insertAdjacentHTML('beforeend', `<option value="${item.sale}">${item.ccy}</option>`);
                    }
                });
            }
        });

        request.open('GET', this.getCurrencyAPI);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();
    }

    changeCurrencyValue() {
        this.content.addEventListener('click', (e) => {
            const target = e.target;
            const changeSelectValue = this.changeSelect.value;
            const receiveSelectValue = this.receiveSelect.value;

            if (target.id === 'equals') {
                this.receive.value = ((changeSelectValue / receiveSelectValue) * this.change.value).toFixed(2);
            }
        });
    }

    switchCurrencies() {
        this.content.addEventListener('click', (e) => {
            const target = e.target;

            const change = this.change.value;
            const receive = this.receive.value;

            let changeSelectIndex = this.changeSelect.options.selectedIndex;
            let receiveSelectIndex = this.receiveSelect.options.selectedIndex;

            if (target.id === 'switch') {
                if (this.change.value !== '' && this.receive.value !== '') {
                    this.change.value = receive;
                    this.receive.value = change;

                    this.changeSelect.selectedIndex = receiveSelectIndex;
                    this.receiveSelect.selectedIndex = changeSelectIndex;

                    document.querySelector('#equals').click();
                }
            }
        });
    }

    init() {
        this.basic();

        this.getData();
        this.changeCurrencyValue();
        this.switchCurrencies();
    }
}
const currencyConverter = new CurrencyConverter();
currencyConverter.init();