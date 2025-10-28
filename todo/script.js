document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    const emptyState = document.getElementById('emptyState');
    const totalTasksElement = document.getElementById('totalTasks');
    
    let tasks = [];
    
    loadTasks();
    
    function addTask() {
        const taskText = todoInput.value.trim();
        
        if (taskText === '') {
            return;
        }
        
        const task = {
            id: Date.now(),
            text: taskText
        };
        
        tasks.push(task);
        saveTasks();
        renderTasks();
        
        todoInput.value = '';
        todoInput.focus();
    }
    
    function renderTasks() {
        todoList.innerHTML = '';
        
        if (tasks.length === 0) {
            todoList.appendChild(emptyState);
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            
            tasks.forEach(task => {
                const todoItem = document.createElement('div');
                todoItem.className = 'todo-item';
                
                todoItem.innerHTML = `
                    <span class="todo-text">${task.text}</span>
                `;
                
                todoList.appendChild(todoItem);
            });
        }
        
        updateStats();
    }
    
    function updateStats() {
        const totalTasks = tasks.length;
        totalTasksElement.textContent = `Всего задач: ${totalTasks}`;
    }
    
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            renderTasks();
        }
    }
    
    addBtn.addEventListener('click', addTask);
    
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});