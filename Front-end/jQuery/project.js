// var player1 = prompt("Player One: Enter Your Name , you will be Blue")
//
// $("h3").text(player1 +": it is your turn, please pick a column to drop your red chip.")


function columnEdit() {
  for (var i = 0; i < 41; i+=7) {
      this.css("background","red")

  }

}


$("td").eq(1).on("click", columnEdit)
