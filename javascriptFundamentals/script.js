// task 2 - working with variables
let name = "John";
let admin;
admin = name;

alert(admin)

// task 2.1 - giving the right name
let ourPlanet = "Earth";
let currentUserName;

// Task 3 - string quotes
let nameTask3 = "Ilya";

alert( `hello ${1}` ); //hello 1

alert( `hello ${"nameTask3"}` ); //hello nameTask3

alert( `hello ${nameTask3}` ); //hello Ilya

// Task 4 - a simple page
let inputName = prompt("Please, enter your name", "");
alert(`Hello ${inputName}`)

// Task 5 - the postfix and prefix form
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// Task 5.2 - assignment result
let a2 = 2;

let x = 1 + (a2 *= 2); //5

alert(x)

// Task 5.3 - Type conversions
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" //6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // " -9 5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

//Task 5.4 - fix the addition
let a3 = prompt("First number?", 1);
let b3 = prompt("Second number?", 2);

alert(+a3 + +b3); // 12

// Task 6 - Comparisions
5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false