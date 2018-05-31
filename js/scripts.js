/*
 let inside = true;

 if(inside){
   console.log('i am inside')
 } else {
 } console.log('i am not inside');
*/

/*let inside = example2;
example2 ? "i am inside" : "I am not inside";
console.log(inside); PROBS NOT CORRECT*/

/*let number = 10;

(number >20) ? "number is greater than 20" : "number is les than 20"
console.log((number >20) ? "number is greater than 20" : "number is les than 20")

let number = 15;
number > 10 ? "number is greater than 10" : "number is less than 10";
console.log(number > 10 ? "number is greater than 10" : "number is less than 10";) */

let name = false;
let email = true;

if(name) {
  console.log("i have name")
} else if(email){
  console.log("i have email")
} else {
  console.log("i have neither")
};

name ? "i have name" : email ? "i have email" : "i have none";


let iAmHungry = true;
/*
let money = 5;
if (iAmHungry) {
  if (money > 10){
    console.log('i am hungry and i have more than 10 dollars')
  }
  else (money < 10){
    console.log("i am hungry and i have less than 10 dollars")
  }
} else {
  (money > 10){
    console.log('i am not hungry and i have more than 10 dollars')
  } else (money < 10){
    console.log("i am not hungry and i have less than 10 dollars")
  }
};
*/


/*let hungry = iAmHungry ? ((money > 10) ? "i am hungry and i have more than 10 dollars" : "i am hungry and have less than 10 dollars") :
                        ((money  > 10) ? "i am not hungry and i have more than 10 dollars" : "i am not hungry and have less than 10 dollars"

            console.log(hungry)
*/
let iAmWearingYellow = false;

let number = 23;

let num = (number = 23 && iAmWearingYellow) ? "number = 23 and yellow" : "number not 23 and/or not yellow" ;

console.log(num)

var fruits = ["apple" , "banana"]

var first = fruits [1];

console.log(first);

let arr = ["javascript", 130, {}, [], true];

console.log(arr[4]);

console.log(arr[6]);

let meBaby = ["Super Troopers Two", 3, true, 2013]

console.log(meBaby.length)

console.log(meBaby)

meBaby.push("Push it to the limit!");

console.log(meBaby);


console.log(meBaby[meBaby.length -1]);

let removed = meBaby.pop()

console.log("last was popped off and displayed below");
console.log(removed);

console.log(meBaby[meBaby.length -1]);

meBaby.splice(2, 1);

console.log(meBaby, "this is the result of a second argument splice");

meBaby.splice(2, 0, false, "wow splices rule")

console.log(meBaby, "this is the result of a third argument splice");

let copy = meBaby.slice();

console.log(meBaby.indexOf(2013));

meBaby.reverse();

console.log(meBaby, "this is result of .reverse ");

const products = [["blanket", 12.99, "the best blanket around."], ["rattle", 4.99, "it rattles man..."] ["diapers", 12.99, "they catch the doo doo"]]

console.log(products[0][1]);

let favoriteMovies = [["Anchorman", "Ron Burgandy"], ["Superbad", "Fogle"], ["Cars", "Lightning McQueen"], ["Jurassic Park", "T-rex"], ["Air-Bud", "Bud"]]
console.log(favoriteMovies.length);

let titles = [];
titles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0])
console.log(titles);
