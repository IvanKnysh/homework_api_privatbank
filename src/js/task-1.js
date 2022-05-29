"use strict"

/*
* Завдання 2
* Список завдань
* */
class Todo {
    constructor() {
        this.before = document.querySelector('.before');
        this.after = document.querySelector('.after');
        this.todosAPI = 'https://jsonplaceholder.typicode.com/todos';
    }

    getData() {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);

                data.forEach(item => {
                    if (item.userId === 1) {
                        this.showTasks(item);
                    }
                });
            }
        });

        request.open('GET', this.todosAPI);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
    }

    showTasks(item) {
        if (item.completed) {
            this.after.insertAdjacentHTML('beforeend', `
                <div class="task">
                    <div class="check checked"></div>
                    <input type="text" placeholder="Додати завдання" value="${item.title}" disabled>
                        <button></button>
                </div>
            `);
        } else {
            this.before.insertAdjacentHTML('beforeend', `
                <div class="task">
                    <div class="check"></div>
                    <input type="text" placeholder="Додати завдання" value="${item.title}" disabled>
                        <button></button>
                </div>
            `);
        }
    }

    init() {
        this.getData();
    }
}
const todo = new Todo();
todo.init();