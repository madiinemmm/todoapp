function validate(name) {
    if (name.value.trim().length < 3) {
        alert("Please enter a valid name");
        name.focus();
        return false; 
    }

    return true;
}


function getData() {
    let data = [];
    if (localStorage.getItem("todos")){
        data = JSON.parse(localStorage.getItem("todos"));
    };

    return data;
}
function createRow(todo, index) {
    return `
    <tr>
        <td>${index}</td>
        <td>${todo.name}</td>
        <td>
            <button>${todo.status}</button>
        </td>
        <td>
            <i class="fa-regular fa-pen-to-square"></i>
        </td>
        <td>
            <i data-id = ${todo.id} class="fa-regular fa-trash-can"></i>
        </td>
    </tr>
    `;
}

export { validate, getData, createRow };