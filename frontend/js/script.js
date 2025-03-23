if (!window.isScriptInitialized) {
    window.isScriptInitialized = true; // Global flag to prevent reinitialization

    document.addEventListener('DOMContentLoaded', () => {
        const fetchTasks = async () => {
            console.log('Fetching tasks...'); // Debug log
            const response = await fetch('http://127.0.0.1:5000/tasks');
            const tasks = await response.json();
            console.log('Tasks fetched:', tasks); // Debug log
            const taskList = document.querySelector('.to-do-lst');
            taskList.innerHTML = ''; // Clear existing tasks
            tasks.forEach(task => {
                const listItem = document.createElement('li');
                listItem.className = 'to-do-lst-item';
                listItem.innerHTML = `
                    <input type="checkbox" class="to-do-lst-item-chk">
                    <span class="to-do-lst-item-txt">${task.task}</span>
                    <button class="to-do-lst-item-del" onclick="deleteTask(${task.id})">Delete</button>
                `;
                taskList.appendChild(listItem);
            });
        };

        let isAddingTask = false; // Flag to prevent concurrent execution

        const addTask = async () => {
            if (isAddingTask) {
                console.warn('addTask is already running.'); // Debug log
                return; // Prevent concurrent execution
            }
            isAddingTask = true;

            const taskInput = document.querySelector('#new-task');
            const task = taskInput.value.trim();
            console.log('Task to add:', task); // Debug log
            if (task) {
                try {
                    console.log('Sending POST request to add task...'); // Debug log
                    const response = await fetch('http://127.0.0.1:5000/tasks', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ task })
                    });
                    console.log('Response status:', response.status); // Debug log
                    if (response.ok) {
                        console.log('Task added successfully.'); // Debug log
                        taskInput.value = ''; // Clear input
                        fetchTasks(); // Refresh the task list
                    } else {
                        console.error('Failed to add task:', await response.json());
                    }
                } catch (error) {
                    console.error('Error adding task:', error);
                }
            } else {
                console.warn('Task input is empty.');
            }

            isAddingTask = false; // Reset the flag
        };

        const deleteTask = async (taskId) => {
            console.log(`Deleting task with ID: ${taskId}`); // Debug log
            await fetch(`http://127.0.0.1:5000/tasks/${taskId}`, { method: 'DELETE' });
            fetchTasks(); // Refresh the task list
        };

        // Ensure the event listener is added only once
        const addTaskButton = document.querySelector('#add-task-btn');
        if (!addTaskButton.dataset.listenerAdded) {
            console.log('Adding event listener to Add Task button.'); // Debug log
            addTaskButton.addEventListener('click', addTask);
            addTaskButton.dataset.listenerAdded = true; // Mark listener as added
        }

        fetchTasks();
    });
}
