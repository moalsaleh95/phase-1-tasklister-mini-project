const form = document.getElementById("create-task-form");
const inputValue = document.getElementById("new-task-description");
const listBody = document.getElementById("list");
const tasksBody = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", handleSubmit);
});


function handleSubmit(e) {
  e.preventDefault();

  const list = document.createElement("li");
  list.innerText = `${inputValue.value}`;
  tasksBody.appendChild(list);

  form.reset();
}



