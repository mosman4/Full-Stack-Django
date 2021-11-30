var firstName = prompt("what is your first name");
var lastName = prompt("what is your last name");
var clueA = 0;
if (firstName[0] === lastName[0]) {
  clueA = clueA+1;
}

var age = prompt("How old are you");
if (age>20 && age<30) {
  clueA = clueA+1;
}

var height = prompt("How tall are you")

if (height >= 170 ) {
  clueA = clueA+1;
}

var petname = prompt("What is your pet name")
for (var i = 0; i < petname.length; i++) {
  petname[i]
  if (petname[i] == "y") {
    clueA = clueA+1;
  }
}

if (clueA == 4) {
  console.log("This is a spy");
}else {
  console.log("This is NOT a spy");
}





























// var ibsWeight = prompt("Please enter the weight in ibs");
// var kgsWeight = ibsWeight * 0.454;
// alert("Your weight in kg is " + kgsWeight);
// console.log("Conversion Completed");
