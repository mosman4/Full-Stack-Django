var restart = document.querySelector("#b")
var squares = document.querySelectorAll("td")



function clearData() {
  for (jelly of squares) {
    jelly.textContent ="";
  }
}

function changeBoard() {
  if (this.textContent === ""){
    this.textContent = "X"
  }else if (this.textContent === "X") {
    this.textContent = "O"
  }else {
    this.textContent = "";
  }
}

restart.addEventListener("click",clearData)



for (mint of squares) {
  mint.addEventListener("click",changeBoard)
  }










// var h1 = document.querySelector("#h1")
// var h2 = document.querySelector("#h2")
// var h3 = document.querySelector("#h3")
// var h4 = document.querySelector("#h4")
// var h5 = document.querySelector("#h5")
// var h6 = document.querySelector("#h6")
// var h7 = document.querySelector("#h7")
// var h8 = document.querySelector("#h8")
// var h9 = document.querySelector("#h9")

// h1.addEventListener("click", function(){
//   h1.textContent = "X"
// })
//
// h1.addEventListener("dblclick", function(){
//   h1.textContent = "O"
// })
//
//
// h2.addEventListener("click", function(){
//   h2.textContent = "X"
// })
//
// h2.addEventListener("dblclick", function(){
//   h2.textContent = "O"
// })
//
// h3.addEventListener("click", function(){
//   h3.textContent = "X"
// })
// h3.addEventListener("dblclick", function(){
//   h3.textContent = "O"
// })
//
//
// h4.addEventListener("click", function(){
//   h4.textContent = "X"
// })
// h4.addEventListener("dblclick", function(){
//   h4.textContent = "O"
// })
//
// h5.addEventListener("click", function(){
//   h5.textContent = "X"
// })
// h5.addEventListener("dblclick", function(){
//   h5.textContent = "O"
// })
//
// h6.addEventListener("click", function(){
//   h6.textContent = "X"
// })
// h6.addEventListener("dblclick", function(){
//   h6.textContent = "O"
// })
// h7.addEventListener("click", function(){
//   h7.textContent = "X"
// })
// h7.addEventListener("dblclick", function(){
//   h7.textContent = "O"
// })
//
// h8.addEventListener("click", function(){
//   h8.textContent = "X"
// })
// h8.addEventListener("dblclick", function(){
//   h8.textContent = "O"
// })
// h9.addEventListener("click", function(){
//   h9.textContent = "X"
// })
// h9.addEventListener("dblclick", function(){
//   h9.textContent = "O"
// })
