/*
    Filter unique array members
    - Create a function that should return an array
    with unique items
*/
function unique(arr) {
    const newArr = new Set(arr);

    for(let item of newArr){
        newArr.add(item);
    }
    return newArr;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

/*
    Filter Anagrams
    - function  that returns an array cleaned from anagrams
*/
function cleanAnograms(arr) {
    const newArray = new Set();

    for(let item of arr){
        let sorted = item.toLowerCase().split("").sort().join("");
        newArray.add(sorted);
    }
    return Array.from(newArray.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(cleanAnograms(arr));

/*
    Iterable keys
    - get an array of map.keys() in a variable and then apply array-specific method
*/
const map = new Map();
map.set("name", "John");

let keys = map.keys();
console.log(keys);

const arrKeys = Array.from(map.keys()); //convert a map keys into an array 
arrKeys.push("more"); //add "more" to the array
console.log(arrKeys);
