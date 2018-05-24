/* Asks for the user's first name
Asks for the user's last name
Logs the user's first name to the console
Alerts the user's last name
*Confirms the user's birthday and alerts the resulting birthday */


let firstName = prompt("Whats your first name?", "Joe");
let lastName = prompt("Whats your Last name?", "Doe");

console.log(firstName);
alert(lastName);

let userBday = confirm("Is Today Your Birthday?");
alert(Date.now());
