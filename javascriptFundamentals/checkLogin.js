// Task 8.9 - check the login
let enterYourStatus = prompt("Hello, who you are?", "");

if(enterYourStatus === "Admin") {
    let password = prompt("Enter your password", "");
    if(password === "TheMaster") {
        alert("Welcome!")
    } else if (password === "" || password === null) {
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
} else if (enterYourStatus === "" || enterYourStatus === null){
    alert("Canceled")
} else (
    alert("I don't know you")
)