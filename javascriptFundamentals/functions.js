// Task 10.1 - rewrite the function using ? or ||
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?') ;
}

//Task 10.2 - function min(a, b)
function min(a, b) {
    console.log((a < b) ? a : b)
}

min(2, 5);
min(3, -1);
min(1, 1);

// Task 10.3 - function pow(x, n)
function pow(x, n) {
    // let x = +prompt("enter x value", "");
    // let n = +prompt("enter n value");
    return alert(x**n) 
}

pow(+prompt("enter x value", ""), +prompt("enter n value"))
// pow(3, 2);
// pow(3, 3);
// pow(1, 100);