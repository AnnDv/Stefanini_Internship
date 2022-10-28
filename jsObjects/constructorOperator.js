/**
Creates new Calculator
**/
function Calculator(){
    this.read = function read() {
        this.a = +prompt("a", 0);
        this.b = +prompt("b", 0);
    };
    this.sum = function sum() {
        return this.a + this.b;
    };
    this.mul = function mul() {
        return this.a * this.b;
    }
};

const calculator = new Calculator();
calculator.read();
  
alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );

// Task 3 - create new accumulator

function Accumulator(value) {
    this.value = value;
    this.read = function read() {
        this.num = +prompt("num?", 0);
        this.value = this.num + this.value;
        // console.log(this.value)

    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);