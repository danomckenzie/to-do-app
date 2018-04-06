function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    console.log("thing");

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('button');

    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    newLi.appendChild(deleteButton);

    toDoList.appendChild(newLi);

    console.log(newLi);

    newToDoText.value = '';
  });
}

window.onload = function() {
  onReady();
};
