/*
    Destructuring assignment
    write the destructuring assignment that reads 
    - name prop -> variable name;
    - years prop -> variable age;
    - isAdmin prop -> variable isAdmin (false if no such property)
*/
let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;
console.log( name );
console.log( age ); 
console.log( isAdmin );

/*
    The maximal salary
    create a function that returns the name of the top-paid person
*/
function topSalary(salaries) {
    let maxSalary = 0;
    let topEmploy = "";
    if (Object.entries(salaries).length === 0) return null;

    for (let [name, value] of Object.entries(salaries)) {
        if (maxSalary < value) {
            maxSalary = value;
            topEmploy = name;
        }
    }
    return topEmploy;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));