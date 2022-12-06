const comment = document.getElementById("txt-comment");
const btnPublic = document.getElementById("btn-public");
const response = document.getElementById("result");
const userName = document.querySelector("#txt-name");
const responseName = document.getElementById("name");
const responseInitial = document.getElementById("Initial");
const counter = document.getElementById("counter");
const btnConvertMinus = document.getElementById("btn-convert-minus");
const btnConvertMayus = document.getElementById("btn-convert-mayus");
const btnConvertCapitaliz = document.getElementById("btn-convert-capitaliz");


userName.addEventListener("keydown", sendName);
comment.addEventListener("keyup", sendComment);
btnPublic.addEventListener("click", textComment);
btnConvertMinus.addEventListener("click", convertLowerCase);
btnConvertMayus.addEventListener("click", convertUpperCase);
btnConvertCapitaliz.addEventListener("click", capitaliz);


function sendName(event) {
  let username = userName.value;
  let firstCharacter = userName.value.trim().charAt(0).toUpperCase();

  if (event.code === "Enter") {
    responseName.textContent = username;
    responseInitial.textContent = firstCharacter;
  }
}


function sendComment() {
  let maxCharacters = 280;
  let remaining = (maxCharacters - comment.value.length);
  if (remaining <= 50) {
    counter.style.color = "red"
  } else {
    counter.style.color = "green"
  }
  counter.textContent = " Contador → " + remaining;
}


function textComment() {
  let comentFull = comment.value;
  response.textContent = `Su comentario es → ${comentFull}`;
}


function convertUpperCase() {
  comment.value = comment.value.toUpperCase();
}


function convertLowerCase() {
  comment.value = comment.value.toLowerCase();
}