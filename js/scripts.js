
/*
let numberSquared = function(num1) {
  let numCheck = parseInt(num1)
  if (isNaN(numCheck)) {
        return numberSquared(prompt("must be number!", "2"));

  } else {
        return num1 * num1;
}
}

alert(numberSquared(prompt("give me a number!", "2")));

*/

let periodAdd = function(string1) {
  let newArray = string1.split("");
  let firstLetter = newArray.splice(0,1);
  console.log(firstLetter);
  firstLetter.capitolCase();

  newArray.unshift(newFirstLetter);
  console.log(newArray);

}

alert(periodAdd("who goes there"));
