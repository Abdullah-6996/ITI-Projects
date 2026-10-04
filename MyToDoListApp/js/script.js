document.querySelector('#addButton').addEventListener('click', function() {
    const taskInput = document.querySelector('#taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.querySelector('#taskList');
        const newTask = document.createElement('li');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        
        taskInput.value = '';
        taskInput.focus();
        
        editButton.textContent = 'Edit...';
        editButton.classList.add('edit-btn', 'btn-secondary', 'float-end');
        newTask.appendChild(editButton);
        
        deleteButton.textContent = 'X';
        deleteButton.classList.add('dlt-btn', 'btn-danger', 'float-end');
        newTask.appendChild(deleteButton);
        
    }
});
document.querySelector('#taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#addButton').click();
    }
});
document.querySelector('#clearButton').addEventListener('click', function() {
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';
});
document.querySelector('#taskList').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
    else if (event.target.classList.contains('dlt-btn')) {
        event.target.parentElement.remove();
    }
    else if (event.target.classList.contains('edit-btn')) {
        const taskItem = event.target.parentElement;
        const taskText = taskItem.firstChild.textContent;
        const newTaskText = prompt('Edit task:', taskText);
        if (newTaskText !== null) {
            taskItem.firstChild.textContent = newTaskText;
        }
    }
});