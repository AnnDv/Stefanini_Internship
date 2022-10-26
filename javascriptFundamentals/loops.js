// Task 9.1 - last loop value
let i = 3;

while (i) {
  alert( i-- );
} // last value 1

// Task 9.2 - which values does the while loop show
let j = 0;
while (++j < 5) alert( "prefix " + j ); // shows from 1 to 4

let k = 0;
while (k++ < 5) alert( "postfix " + k ); // show from 1 to 5

// Task 9.3 - which values get shown by the for loop
for (let i = 0; i < 5; i++) alert( "pre " + i ); // from 0 to 4

for (let i = 0; i < 5; ++i) alert("post " + i ); //from 0 to 4

// Task 9.4 - output even numbers
for (i = 2; i < 10; i++) {
  if (i % 2 === 0){
    alert(i)
  }
}

// Task 9.5 - replace for with while
for (let d = 0; d < 3; d++) {
  alert( `number ${d}!` );
}

let d = 0;
while (d < 3) {
  alert( `number ${d}!` );
  d++;
}

// Task 9.6 - output prime numbers

