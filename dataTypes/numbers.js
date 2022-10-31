// sum 2 numbers
function sumNumbers(){

    let num1 = +prompt("enter num1", 0);
    let num2 = +prompt("enter num2", 0);

    alert(num1 + num2);
}

// generates random number from min to max
function randomNum(min, max) {

    let difference = max - min;
    let randNum = Math.random() * difference;

    return min + randNum;
}

// generates random integer number from min and max
function randomInteger(min, max) {

    let difference = max - min;
    let randNum = Math.random() * difference;

    return Math.floor(min + randNum);
}
