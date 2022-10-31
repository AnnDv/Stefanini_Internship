// sorts in decreasing order
function sortDeacreased(arr) {
    return arr.sort((a, b) => b - a);
}

let array = [3, 5, 1 , 8, 9, 4];
console.log(sortDeacreased(array));

//copies and sorts array
function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"]
let sortedArray = copySorted(arr); 

//sorts by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
  }
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let arrayNames = [ pete, john, mary ];
  
  sortByAge(arrayNames);

  //filters unique array members
  function unique(arr) {

    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];