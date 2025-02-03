const toggleTheme = document.getElementById("theme-toggle");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

let currentColumn = null;
let currentTask = null; // Holds the currently edited task
const taskModal = document.getElementById("task-modal");
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");

// Load tasks from localStorage on page load
window.onload = loadTasks;

function openTaskModal(columnId, taskElement = null) {
  currentColumn = columnId;
  currentTask = taskElement;

  // Pre-fill the modal with existing task data if editing
  if (currentTask) {
    taskTitle.value = currentTask.querySelector("strong").textContent;
    taskDesc.value = currentTask.querySelector("p").textContent;
  } else {
    taskForm.reset(); // Reset the modal for new task
  }

  taskModal.style.display = "flex";
}

function closeTaskModal() {
  taskModal.style.display = "none";
  currentTask = null; // Reset current task
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskTitle.value;
  const description = taskDesc.value;

  if (currentTask) {
    // Update existing task
    currentTask.querySelector("strong").textContent = title;
    currentTask.querySelector("p").textContent = description;
  } else {
    // Create a new task
    const column = document.getElementById(currentColumn).querySelector(".task-list");
    const task = document.createElement("div");
    task.classList.add("task");
    task.draggable = true;
    task.innerHTML = `
      <strong>${title}</strong>
      <p>${description}</p>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="removeTask(this)">Delete</button>
    `;
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
    column.appendChild(task);
  }

  saveTasks(); // Save updated tasks to localStorage
  closeTaskModal();
});

function removeTask(button) {
  button.closest(".task").remove();
  saveTasks(); // Save updated tasks to localStorage
}

function editTask(button) {
  
  const task = button.closest(".task");
  openTaskModal(task.closest(".column").id, task); // Pass the task element to edit
}

const columns = document.querySelectorAll(".task-list");

columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    column.classList.add("drag-over");
  });

  column.addEventListener("dragleave", () => {
    column.classList.remove("drag-over");
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    const task = document.querySelector(".dragging");
    column.appendChild(task);
    column.classList.remove("drag-over");
    saveTasks(); // Save updated tasks to localStorage
  });
});

function dragStart() {
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

function saveTasks() {
  const data = {
    todo: [],
    "in-progress": [],
    done: [],
  };

  // Iterate through each column and save tasks
  columns.forEach((column) => {
    const columnId = column.closest(".column").id;
    const tasks = column.querySelectorAll(".task");

    tasks.forEach((task) => {
      const title = task.querySelector("strong").textContent;
      const description = task.querySelector("p").textContent;

      data[columnId].push({ title, description });
    });
  });

  localStorage.setItem("tasks", JSON.stringify(data));
}

function loadTasks() {
  const data = JSON.parse(localStorage.getItem("tasks"));

  if (!data) return;

  Object.keys(data).forEach((columnId) => {
    const column = document.getElementById(columnId).querySelector(".task-list");

    data[columnId].forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.draggable = true;
      taskElement.innerHTML = `
        <strong>${task.title}</strong>
        <p>${task.description}</p>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="removeTask(this)">Delete</button>
      `;
      taskElement.addEventListener("dragstart", dragStart);
      taskElement.addEventListener("dragend", dragEnd);
      column.appendChild(taskElement);
    });
  });
}
