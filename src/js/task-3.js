"use strict"

/*
* Завдання 3
* Список відділень ПриватБанку
* */
class BranchesList {
    constructor() {
        this.branchesList = document.querySelector('#branches-list');
        this.output = document.querySelector('.output');
    }

    getData() {
        this.branchesList.addEventListener('change', () => {
            const request = new XMLHttpRequest();
            this.output.innerHTML = '';
            request.addEventListener('readystatechange', () => {
                if (request.readyState === 4 && request.status === 200) {
                    const data = JSON.parse(request.responseText);

                    data.forEach(item => {
                        if (item.country === 'Украина') {
                            if (item.state === this.branchesList.value) {
                                this.output.insertAdjacentHTML('beforeend', `
                                    <div class="block">
                                        <img src="./src/img/logo.png" alt="">
                                        <p><span>Отделение:</span> ${item.name}</p>  
                                        <p><span>Адрес:</span> ${item.address}</p>  
                                        <p><span>Город:</span> ${item.city}</p>  
                                        <p><span>Тел.:</span> ${item.phone}</p>  
                                        <p><span>Email:</span> ${item.email}</p>  
                                        <p><span>Индекс:</span> ${item.index}</p>  
                                    </div>
                                `);
                            }
                        }
                    })
                }
            });

            request.open('GET', './privat.json');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.send();
        });
    }

    init() {
        this.getData();
    }
}
const branchesList = new BranchesList();
branchesList.init();