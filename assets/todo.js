document.getElementById('student-label').textContent = student.name + ' · ' + student.group;
let tasks = [];
let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('todo-list');

function showTasks() {
  taskList.textContent = '';
  let completedCount = 0;

  tasks.forEach(function (task, index) {
    let item = document.createElement('li');
    let label = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    let text = document.createElement('span');
    text.textContent = task.text;

    if (task.completed) {
      item.className = 'completed';
      completedCount++;
    }
    checkbox.addEventListener('change', function () {
      tasks[index].completed = checkbox.checked;
      showTasks();
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.className = 'secondary';
    deleteButton.addEventListener('click', function () {
      tasks.splice(index, 1);
      showTasks();
    });

    label.appendChild(checkbox);
    label.appendChild(text);
    item.appendChild(label);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
  });
  document.getElementById('empty-state').hidden = tasks.length > 0;
  document.getElementById('task-count').textContent = completedCount + ' of ' + tasks.length + ' complete';
}

document.getElementById('todo-form').addEventListener('submit', function (event) {
  event.preventDefault();
  let text = taskInput.value.trim();
  if (text === '') {
    document.getElementById('todo-message').textContent = 'Please enter a task first.';
    return;
  }
  tasks.push({ text: text, completed: false });
  taskInput.value = '';
  document.getElementById('todo-message').textContent = '';
  showTasks();
  taskInput.focus();
});
showTasks();
