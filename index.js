//Функция добавляет новую задачу в список
function addItem() {
  let newItem = document.createElement("div");

  newItem.innerHTML = document.getElementById("box").value;
  newItem.classList.add("list");
  newItem.onclick = removeItem;
  console.log(newItem);
  if (document.getElementById("box").value === "") {
    alert("Введите текст");
  } else {
    document.getElementById("list").appendChild(newItem);
    document.getElementById("box").value = "";
  }

  console.log(newItem);
  createButtons();
  function createButtons() {
    let buttonClose = document.createElement("button");
    let buttonComplete = document.createElement("button");
    newItem.append(buttonComplete);
    newItem.append(buttonClose);
    buttonComplete.innerText = "Complete";
    buttonClose.innerText = "Х";
    saveList();
  }
}
//функция удаляет задачу при нажатии на неё
function removeItem() {
  document.getElementById("list").removeChild(this);
  saveList();
}
//функция сохраняет список задач в localStorage
function saveList() {
  localStorage.storedList = document.getElementById("list").innerHTML;
}
//функция удаляет из localeStorage дело
function loadList() {
  document.getElementById("list").innerHTML = localStorage.storedList;
  for (var i = 0; i < list.children.length; i++) {
    list.children[i].onclick = removeItem;
  }
}
// если список дел есть в localeStorage загружаем его на страницу
if (localStorage.storedList) {
  loadList();
}
