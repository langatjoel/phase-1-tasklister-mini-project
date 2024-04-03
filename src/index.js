document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  taskForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          const taskItem = document.createElement('li');
          taskItem.textContent = taskText;

          // Delete button
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.addEventListener('click', function() {
              taskItem.remove();
          });
          taskItem.appendChild(deleteButton);

          taskList.appendChild(taskItem);
          taskInput.value = '';
      } else {
          alert('Please enter a valid task!');
      }
  });
});

    
