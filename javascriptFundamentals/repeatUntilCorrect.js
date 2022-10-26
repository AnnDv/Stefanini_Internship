//Task 9.6 - repeat until the input is correct
let enterNumber;

do {
  enterNumber = prompt("Enter a number greater than 100?", 0);
} while (enterNumber <= 100 && enterNumber);