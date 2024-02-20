import { validate, getData, createRow} from "./functions.js";

const name = document.getElementById("name");
const button = document.getElementById("button");
const tbody = document.getElementById("tbody");
const form = document.getElementById("form");


button && button.addEventListener("click", function(e) {
    e.preventDefault();
    const isValid = validate(name);

    if (isValid) {
        const todo = {
            name: name.value,
            status: "todo",
            id: Date.now()
        }

        let todos = getData();
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        form.reset();

        let tr = createRow(todo, todos.length);
        tbody.innerHTML += tr;

    }
})

document.addEventListener('DOMContentLoaded', function() {
    let todos = getData();
    if (todos.length) {
        todos.forEach((todo, index) => {
            let tr = createRow(todo, index + 1);
            tbody.innerHTML += tr;
        })
    }

    const deleteButtons = document.querySelectorAll('i.fa-trash-can');
    
    if (deleteButtons.length) {
        deleteButtons.forEach((del) => {
            del && del.addEventListener('click', function(e) {
                e.preventDefault();
                let isDelete = confirm("Rostdan ham ushbu malumotni ochirmoqchimisiz?");
                console.log(del);
                let id = this.getAttribute('data-id');
                if (isDelete && id) {
                    todos = todos.filter(todo => {
                        return todo.id != id;
                    })

                    localStorage.setItem('todos', JSON.stringify(todos));
                    window.location.reload();
                }
            })
        })
    }

})

