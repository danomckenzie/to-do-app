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

    toDoList.appendChild(newLi);

    console.log(newLi);

    newToDoText.value = '';

    newLi.appendChild(deleteButton);

    toDoList.appendChild(newLi);

    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener('click', function(e){
      toDoList.removeChild(e.target.parentNode);
    })
  });
}

window.onload = function() {
  onReady();
};
