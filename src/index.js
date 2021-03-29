document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', taskList)
});

function taskList(event) {
  event.preventDefault()
  // document.getElementsByClassName("create-task-form")
  const inputField = document.getElementById("new-task-description");
  console.log(inputField.value);
  const ul = document.getElementById("tasks");
  const li = document.createElement("li")
  li.innerText = inputField.value
  ul.appendChild(li);
  inputField.value = ""
}

