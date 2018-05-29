/* Asks for the user's first name
Asks for the user's last name
Logs the user's first name to the console
Alerts the user's last name
*Confirms the user's birthday and alerts the resulting birthday */


let firstName = prompt("Whats your first name?", "John");
let lastName = prompt("Whats your Last name?", "Doe");
let date = new Date();
var options = {
    month: "short", day: "numeric"
};

console.log(firstName);

alert("Welcome " + (firstName) + " " + (lastName) + "!");

let userBday = confirm("So " + (firstName) + ", Is Today Your Birthday?");

if (userBday == 1) {
  alert("Hooray! Your Birthday Is " + (date.toLocaleDateString("en-us", options)) + "!")
} else {
    alert("awwww...") 
};
