const tasks = [];
  const taskList = document.getElementById('taskList');
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');

  function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.textContent = task;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn btn-sm btn-danger';
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => {
        tasks.splice(index, 1);
        renderTasks();
      };

      listItem.appendChild(removeBtn);
      taskList.appendChild(listItem);
    });
  }

  addTaskBtn.onclick = () => {
    const newTask = taskInput.value.trim();
    if (newTask) {
      tasks.push(newTask);
      taskInput.value = '';
      renderTasks();
    } else {
      taskInput.classList.add('is-invalid');
    }
  };


  taskInput.oninput = () => {
    taskInput.classList.remove('is-invalid');
  };

  renderTasks();