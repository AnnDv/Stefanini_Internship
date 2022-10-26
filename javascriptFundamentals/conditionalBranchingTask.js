// Task 7.1 - if (a string with a zero)
if ("0") {
    alert( 'Hello' ); // Answer: it will show "Hello", because if statement is a nonempty string
}

//Task 7.2 - the name pf JavaScript
let askName = prompt("What is the 'official' name of JavaScript?", "")
if (askName == "ECMAScript") {
    alert("Right!")
} else {
    alert("You don't know? 'ECMAScript'!")
}

// let correctName = (askName == "ECMAScript") ? alert("Right!") : alert("You don't know? 'ECMAScript'!")

//Task 7.3 - show the sign
let getNumber = prompt("Enter a number", 0)

if(getNumber > 0) {
    alert(1)
} else if(getNumber < 0) {
    alert(-1)
} else {
    alert(0)
}

// Task 7.4 - rewrite if into ?
let result;

/*if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

result = (a + b < 4) ? "Below" : "Over";

// Task 7.4 - rewrite if into ?
let message;

/* if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

message = (login == "Employee") ? "Hello" :
    (login == "Director") ? "Greetings" :
    (login == "") ? "No login" :
    "";