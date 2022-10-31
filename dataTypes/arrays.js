// array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//sum input numbers
function sumInput() {

    let numbers = [];
  
    while (true) {
  
        let value = prompt("A number please?", 0);

        if (value === "" || value === null || !isFinite(value)) break;
    
        numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
alert( sumInput() );

// finds a maximal subarray
function getMaxSubSum(arr) {
    let maxSum = 0; 
  
    for (let i = 0; i < arr.length; i++) {

        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
}
