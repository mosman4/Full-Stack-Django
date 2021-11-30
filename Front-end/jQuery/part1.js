


$("input").eq(0).keypress(function(event) {
  if (event.which === 52) {
    console.log("Wooow");
    $("h1").toggleClass("turnBlue")
  }else{
    console.log("Nooooo");
  }

})


$("input").eq(1).click(function () {
  $(".container").slideUp(900)
})


$("h1").mouseenter( function (){
  $("h1").toggleClass("turnRed")
});
//
// $("li").click(function liClicked() {
//   $("li").css("color","green");
// })


// $("input").eq(0).keypress(function () {
//   $("h3").toggleClass("turnBlue");
// })
