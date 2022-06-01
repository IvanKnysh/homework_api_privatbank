"use strict"

/*
* Завдання 3
* Список відділень ПриватБанку
* */
class BranchesList {
    constructor() {
        this.branchesList = document.querySelector('#branches-list');
        this.output = document.querySelector('.output');
        this.getAllDataAPI = 'https://api.privatbank.ua/p24api/pboffice?json';
    }

    getData() {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                console.log(data)
            }
        });

        request.open('GET', this.getAllDataAPI);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send();

    }

    init() {
        this.getData();
    }
}
const branchesList = new BranchesList();
branchesList.init();