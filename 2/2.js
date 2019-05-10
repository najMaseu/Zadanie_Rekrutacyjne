// Grab modal and modal contents
let modal = document.getElementsByClassName("modal")[0];
let modalContent = document.getElementsByClassName("modal__window")[0];

//Grab buttons
let buttonMain = document.getElementsByClassName("button--main")[0];
let buttonClose = document.getElementsByClassName("button--close")[0];
let buttonGoTo = document.getElementsByClassName("button--goto")[0];

//Change display property on modal and modal content
let changeModal = (property) => {
  modal.style.display = property;
  modalContent.style.display = property
}

//Open "3.html"
let goTo = () => {
  window.location.href = "../3/3.html"
}

//Listen for clicks and call appropriate functions
buttonMain.addEventListener("click", () => changeModal("flex"));
buttonClose.addEventListener("click", () => changeModal("none"))
buttonGoTo.addEventListener("click", goTo)
