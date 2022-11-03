/*
    Sum the properties
    - write the function that returns the sum of all salaries using Object.values
    and the for..of loop
*/
function sumSalaries(salaries) {
    sum = 0;

    if(Object.keys(salaries).length === 0) return "sum is 0";

    for(let value of Object.values(salaries)) {
        sum += value;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
};
  
console.log(sumSalaries(salaries));

/*
    Count properties
    - write a function that returns the number of properties in the oject
*/
function countProp(obj) {
    return Object.entries(obj).length;
}

let user = {
    name: 'John',
    age: 30
};
  
console.log(countProp(user) )