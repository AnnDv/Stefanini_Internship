//Task 8.1 - what's the result of OR
alert( null || 2 || undefined ); // 2, because it executes until the first truthy value

// Task 8.2 - what's the result of OR'ed alerts
alert( alert(1) || 2 || alert(3) ); // 1 and 2, alert evaluates to undefined so it goes to the next operand searching for truthy value

// Task 8.3 - what is the result of AND
alert( 1 && null && 2 ); // null => it searches for the first falsy value

// Task 8.4 - what's the result of AND'ed alerts
alert( alert(1) && alert(2) ); // 1 and undefined => it evaluates and prints 1 and beacuse alert is undefined (falsy value) it stops

// Task 8.5 - The result of OR AND OR
alert( null || 2 && 3 || 4 ); // 3

// Task 8.6 - check the range between
let age = prompt("Enter your age", 0);

if(age >= 14 && age <= 90) {
    alert("What a wonderful age")
}

// Task 8.7 - check the range outside 
let enterAge = prompt("Please, enter your age", 0);

// if(!(enterAge >= 14 && enterAge <= 90)) {
//     alert("Your age is not between 14 and 90")
// }

if(enterAge <= 14 || enterAge >= 90) {
    alert("Your age is not between 14 and 90")
}

// Task 8.8 - a question about it
if (-1 || 0) alert( 'first' ); // yes
if (-1 && 0) alert( 'second' ); // no
if (null || -1 && 1) alert( 'third' ); //yes


