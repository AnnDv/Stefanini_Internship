// Task 1 - hello objects
let user = {
    name: "John",
    surname: "Smith",
}

user.name = "Pete"; // change the value of the name
console.log(user.name);
delete user.name; // delete the property
console.log(user);

// Task 2 - check the emptiness
function isEmpty(schedule) {
    for(i in schedule) {
        return false
    }
    return true
    
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

// Task 3 - sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// function to check if the object is empty or not
function checkSalary(salary) {
    let sum = 0;
    for(j in salaries) {
        sum += salaries[j];
    }
}

console.log(checkSalary(salaries));

// Task 4 - multiply numeric property values by 2 
function multiplyNumeric(obj) {
    for(i in obj) {
        if(typeof obj[i] == 'number') {
            obj[i] *= 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
