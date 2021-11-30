var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew (name){
  roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(roster, name) {
  var index = roster.indexOf(name);
  if (index > -1) {
    roster.splice(index, 1);
  }
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.
function display (name){
  for (names of roster) {
    console.log(names);
  }

}

// Start by asking if they want to use the web app
var webApp = prompt ("Do you want to use the web app")

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.


while (webApp == "y") {
  var displayOptions = prompt ("Please select an action: add,remove,display or quit");
  if (displayOptions == "add") {
    var newName = prompt("What name would you like to add?")
    addNew(newName);
    console.log(roster);

  }else if (displayOptions == "quit"){
      break;
  }else if (displayOptions == "remove"){
    var removeName = prompt("What name would you like to delete?")
    remove(roster,removeName)
    console.log(roster);
  }else if (displayOptions == "display"){
    display()
  }
}




























//
