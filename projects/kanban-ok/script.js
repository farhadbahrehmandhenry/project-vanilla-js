var toDoAddItemBtn = document.querySelector('.to-do-container .add-item');
var inProgressAddItemBtn = document.querySelector('.in-progress-container .add-item');
var doneAddItemBtn = document.querySelector('.done-container .add-item');
var onHoldAddItemBtn = document.querySelector('.on-hold-container .add-item');
var toDoTaskContainer = document.querySelector('.to-do-task-container');
var inProgressTaskContainer = document.querySelector('.in-progress-task-container');
var doneTaskContainer = document.querySelector('.done-task-container');
var onHoldTaskContainer = document.querySelector('.on-hold-task-container');
var tasks = document.querySelectorAll('.task');
var lists = document.querySelectorAll('.list');
var containers = document.querySelectorAll('.container');

var toDoTasks = localStorage.getItem('toDoTasks') !== null ? JSON.parse(localStorage.getItem('toDoTasks')) : [];
var inProgressTasks = localStorage.getItem('inProgressTasks') !== null ?  JSON.parse(localStorage.getItem('inProgressTasks')) : [];
var doneTasks = localStorage.getItem('doneTasks') !== null ?  JSON.parse(localStorage.getItem('doneTasks')) : [];
var onHoldTasks = localStorage.getItem('onHoldTasks') !== null ?  JSON.parse(localStorage.getItem('onHoldTasks')) : [];

var draggedTask;
var currentColumn;

// TODO => drag and drop is not working perfect - 
// need to channge the tasks container drag over or enter or leave - or make it bigger
var addTask = (el, type, value='') => {
  var newTaskInput = document.createElement('input');
  var index = el.children.length;

  newTaskInput.setAttribute('data-index', index);
  newTaskInput.className = 'task';
  newTaskInput.setAttribute('draggable', true);

  if (value) {
    newTaskInput.value = value;
  }

  newTaskInput.addEventListener('focusout', (e) => {
    if (newTaskInput.value.trim() === '') {
      el.removeChild(newTaskInput);
      setTimeout(() => {
        [
          {key: 'toDoTasks', el: toDoTaskContainer},
          {key: 'inProgressTasks', el: inProgressTaskContainer},
          {key: 'doneTasks', el: doneTaskContainer},
          {key: 'onHoldTasks', el: onHoldTaskContainer},
        ].forEach(container => {
          var tasks = Array.from(container.el.children).map(element => element.value);
          localStorage.setItem(container.key, JSON.stringify(tasks));
        });
      }, 300);
    }  

    if (type === 'toDoTasks') {
      if (!value) toDoTasks.push(newTaskInput.value);
      localStorage.setItem(type, JSON.stringify(toDoTasks));
    }
    else if (type === 'inProgressTasks') {
      if (!value) inProgressTasks.push(newTaskInput.value);
      localStorage.setItem(type, JSON.stringify(inProgressTasks));
    }
    else if (type === 'doneTasks') {
      if (!value) doneTasks.push(newTaskInput.value);
      localStorage.setItem(type, JSON.stringify(doneTasks));
    }
    else if (type === 'onHoldTasks') {
      if (!value) onHoldTasks.push(newTaskInput.value);
      localStorage.setItem(type, JSON.stringify(onHoldTasks));
    }

  });

  el.appendChild(newTaskInput);

  setTimeout(() => {
    addEventListeners();
    newTaskInput.focus();
  }, 400)
}

toDoTasks.forEach(toDoTask => addTask(toDoTaskContainer, 'toDoTasks', toDoTask));
inProgressTasks.forEach(inProgressTask => addTask(inProgressTaskContainer, 'inProgressTasks', inProgressTask));
doneTasks.forEach(doneTask => addTask(doneTaskContainer, 'doneTasks', doneTask));
onHoldTasks.forEach(onHoldTask => addTask(onHoldTaskContainer, 'onHoldTasks', onHoldTask));

function dragStart(e) {
  draggedTask = e.target;
}

function dragEnter(column) {
  var container = lists[column];

  if (container) {
    container.parentElement.classList.add('over');
    currentColumn = container;
  }
}

function dragLeave(column) {
  var container = lists[column];

  if (container) {
    container.parentElement.classList.remove('over');
    currentColumn = '';
  }
}

function dragDrop(e) {
  e.preventDefault();

  containers.forEach(container => {
    container.classList.remove('over');
  });

  currentColumn.appendChild(draggedTask);

  [
    {key: 'toDoTasks', el: toDoTaskContainer},
    {key: 'inProgressTasks', el: inProgressTaskContainer},
    {key: 'doneTasks', el: doneTaskContainer},
    {key: 'onHoldTasks', el: onHoldTaskContainer},
  ].forEach(container => {
    var tasks = Array.from(container.el.children).map(element => element.value);
    localStorage.setItem(container.key, JSON.stringify(tasks));
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.task');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => dragStart(e));
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
  });

  toDoTaskContainer.addEventListener('dragenter', () => dragEnter(0));
  inProgressTaskContainer.addEventListener('dragenter', () => dragEnter(1));
  doneTaskContainer.addEventListener('dragenter', () => dragEnter(2));
  onHoldTaskContainer.addEventListener('dragenter', () => dragEnter(3));

  toDoTaskContainer.addEventListener('dragleave', () => dragLeave(0));
  inProgressTaskContainer.addEventListener('dragleave', () => dragLeave(1));
  doneTaskContainer.addEventListener('dragleave', () => dragLeave(2));
  onHoldTaskContainer.addEventListener('dragleave', () => dragLeave(3));

  toDoTaskContainer.addEventListener('dragover', (e) => e.preventDefault());
  inProgressTaskContainer.addEventListener('dragover', (e) => e.preventDefault());
  doneTaskContainer.addEventListener('dragover', (e) => e.preventDefault());
  onHoldTaskContainer.addEventListener('dragover', (e) => e.preventDefault());

  toDoTaskContainer.addEventListener('drop', (e) => dragDrop(e));
  inProgressTaskContainer.addEventListener('drop', (e) => dragDrop(e));
  doneTaskContainer.addEventListener('drop', (e) => dragDrop(e));
  onHoldTaskContainer.addEventListener('drop', (e) => dragDrop(e));
}

toDoAddItemBtn.addEventListener('click', () => addTask(toDoTaskContainer, 'toDoTasks'));
inProgressAddItemBtn.addEventListener('click', () => addTask(inProgressTaskContainer, 'inProgressTasks'));
doneAddItemBtn.addEventListener('click', () => addTask(doneTaskContainer, 'doneTasks'));
onHoldAddItemBtn.addEventListener('click', () => addTask(onHoldTaskContainer, 'onHoldTasks'));
