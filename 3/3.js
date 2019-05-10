let input = document.getElementsByClassName("search__input")[0]
let form = document.getElementsByClassName("search")[0]
let dataArr = document.getElementsByTagName("h1")
console.log(dataArr)


let clearPlaceholder = () => {
  if (input.placeholder == "") {
    input.placeholder = "Type here..."
  } else {
    input.placeholder = ""
  }
}

let listFilter = (inputValue) => {
  let regExp = new RegExp(inputValue.toLowerCase())  
  for (let i = 0; i < dataArr.length; i++) {
    if (!regExp.test(dataArr[i].innerHTML.toLowerCase())) {
      dataArr[i].parentElement.style.display = "none"
    } else {
      dataArr[i].parentElement.style.display = "block"
    }
  }


}

input.addEventListener("focus", clearPlaceholder)
input.addEventListener("blur", clearPlaceholder)
form.addEventListener("submit", () => listFilter(input.value))
