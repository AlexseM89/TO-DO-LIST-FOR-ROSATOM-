//Функция добавляет новую задачу в список
function addItem() {
  let newItem = document.createElement("div");
  newItem.innerHTML =
    document.getElementById("box").value +
    " " +
    document.getElementById("boxDate").value;
  newItem.classList.add("list");
  //newItem.onclick = removeItem;
  if (document.getElementById("box").value === "") {
    alert("Введите текст и дату");
  } else if (document.getElementById("boxDate").value === "") {
    alert("Введите текст и дату");
  } else {
    document.getElementById("list").appendChild(newItem);
    document.getElementById("box").value = "";
    document.getElementById("boxDate").value = "";
  }
  let buttonClose = document.createElement("button");
  let buttonComplete = document.createElement("button");
  //добавляем классы к кнопкам
  buttonClose.classList.add("buttonClose");
  //добавим функцию кнопке закрыть задачу
  buttonClose.onclick = function () {
    buttonComplete.parentElement.remove();
    saveList();
  };

  //добавим функцию кнопке пометить задачу решенной и в конец списка
  buttonComplete.onclick = function () {
    //пометим дело завершенным и переместим в конец списка
    buttonComplete.parentElement.style.textDecoration += "line-through";
    let bCom = buttonComplete.parentElement;
    buttonComplete.parentElement.remove();
    document.getElementById("list").appendChild(bCom);
    saveList();
  };
  buttonComplete.classList.add("buttonComplete");
  newItem.append(buttonComplete);
  newItem.append(buttonClose);
  buttonComplete.innerText = "Complete";
  buttonClose.innerText = "Х";
  saveList();
}

//функция сохраняет список задач в localStorage
function saveList() {
  localStorage.storedList = document.getElementById("list").innerHTML;
}
//функция удаляет из localeStorage дело вешает на все записи функциию удаления
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
//удалим первую запись в todo list
function delFirstItem() {
  document.querySelectorAll(".list")[0].remove();
  saveList();
}
//удалим последнюю запись в todo list
function delLastItem() {
  document
    .querySelectorAll(".list")
    [document.querySelectorAll(".list").length - 1].remove();
  saveList();
}
