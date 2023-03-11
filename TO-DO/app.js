const addBtn = document.getElementById('add');
const addTask = document.querySelector('.added-task');
//

addBtn.addEventListener('click', () => {
    const taskValue = document.getElementById('task-value');
    if (taskValue.value.length == 0) 
        alert('empty value');
    else {
        addTask.innerHTML += `
        <div class="task-box">
                <p class="task">${taskValue.value}</p>
                <button class = "delete">
                    <i class="far fa-trash-alt">X</i>
                </button>
        </div>
        `
    }
    taskValue.value = "";
})

let deleteTask = document.querySelectorAll('.delete');

addTask.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }

    if (e.target.classList.contains('task'))
        e.target.classList.toggle('line')
});