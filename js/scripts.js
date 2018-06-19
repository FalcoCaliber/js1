
/*console.log();
let emailInput = document.forms.login.email;
emailInput.addEventListener('keyup', e => {
  console.log(e.target.value);
})
psuedo key logger */


/*
console.log();
let emailInput = document.forms.login.email;
emailInput.addEventListener('keyup', e => {
  console.log(e.keyCode);
})

key logger for specific key number bindings

key up waits for letting off key. key down is as soon as key is pressed
*/
/*
let passwordInput = document.forms.login.password;
let myPTag = document.querySelector('#data_binding');
let emailInput = document.forms.login.email;
emailInput.addEventListener('keyup', e => {

  myPTag.textContent = e.target.value;
});

let submit = document.forms.login.submitbtn;
submit.addEventListener('click', e => {
  if(passwordInput.value === '' || emailInput.value === '') {
    e.preventDefault();
  }
})

*/


let user = {
  name: "henry",
  password: 12345,
  status: "active",
};

let guest = {
  name: "Guest",
  password: undefined,
  status: "inactive",
}


let newScope = {
  name: "Peter Piper",
  password: "bag o peppers",
  instrument: "pipes",
  logfunction: logMyName
}
/*

function logMyName() {
  console.log(this.name, this.password, this.status);

}

logMyName.call(guest);
logMyName.call(user);

*/

function logMyName(greeting) {
  console.log(this.name, this.password);
  alert(`${greeting}, ${this.name}!`);
  }

  logMyName.call(user, "hello");
  logMyName.call(guest, "sign up");

  newScope.logfunction("Fly Away");


  let classScore = 90;

  const scopeOne = {
    classScore: 75,
    scopeTwo: {
      classScore: 50
    }
  };

  console.log(classScore);
  console.log(scopeOne.classScore);
  console.log(scopeOne.scopeTwo.classScore);
