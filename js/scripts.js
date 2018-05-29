
/*console.log(firstName);
let lastName = prompt("whats yo last name?" , "Doe" );
alert(lastName);
let birthday = prompt("Whats your birthday?" , "May 21 1980");
confirm( "Is" + birthday + " your birthday?";   //ES5

// day 2 takehome solution above ^

confirm(`Is ${birthday} your birthday?`);
*/

const name = "";
const age = 32;

if(!name && age) {
  alert("its falsey");
}


const stringAge = "32";

if(age == stringAge) {
  alert("they're the same!");
}

if(age === stringAge) {
  alert("this wont work!");
}

if(age != stringAge) {
  alert("this will not work");
}


if(age !== stringAge) {
  alert("this will work");
}

let objectOne = {
  name: "Ryeker"
};

let objectTwo = {
  name: "Ryeker"
};

alert(objectOne == objectTwo); //ALWAYS FALSE


var juan = "garbage";
var tawhoo = new String("garbage")

if(juan == tawhoo) {
  console.log("loose equal");
}

if(juan === tawhoo) {
  console.log("strict equal");
}

if(juan != tawhoo) {
  console.log("loose not equal");
}

if(juan !== tawhoo) {
  console.log("strict not equal");
}

if(juan >= tawhoo) {
  console.log("greater than or equal to");
}

let limit = 12;
console.log(limit);
limit++;
console.log(limit);
limit = limit + 1; //essentially same as the above
console.log(limit);
limit--;
console.log(limit);
limit = limit - 1; //same as above
console.log(limit);
limit += 7; //just adds seven to current value?
console.log(limit);

let upperLimit = 23;

//

let myNumber = "32";
console.log(myNumber++);

console.log(!isNaN(myNumber));

let userNumberAnsw = prompt("give me a number!", "10");
let userNumberAnswTwo = prompt("give me another number!", "10");
let userNumber = parseInt(userNumberAnsw);
let userNumberTwo = parseInt(userNumberAnswTwo);
let userNumbersSum = (userNumber+userNumberTwo);
console.log(userNumbersSum);
alert(userNumbersSum);
//or
alert(userNumber + userNumberTwo);

// let userNumberAnsw = parseInt(userNumberAnsw);// better way to do it
// let userNumberAnsw = prompt ("give me a number!", "10");// best way probably


if(userNumber > userNumberTwo) {
  alert("your first number was larger!")
} else if(userNumber === userNumberTwo) { alert("Your Numbers are the Same!");
} else if(userNumber < userNumberTwo) { alert("Your first number was smaller!")
} else {
  alert("something went wrong...")
}


//


let firstName = prompt("whats your first name", "Jim");
switch(firstName) {
  case 'Tom':
    alert("hello Tom!");
    break;
  case 'John':
    alert("your name is very common");
    break;
  default:
    alert("ive never heard that name before!");
}
