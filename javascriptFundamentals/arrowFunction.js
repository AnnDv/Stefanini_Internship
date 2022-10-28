// Rewrite with arrow functions
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

// arrow function

let askArrowFunction = (question, yes, no) => {
    confirm(question) ? yes() : no();
}

askArrowFunction(
    "Do you agree?",
    () => alert("You agreed.") ,
    () => alert("You canceled the execution.")
)