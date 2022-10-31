// returns the string with uppercased first character
function ucFirst(str){
    let toUpp = str[0].toUpperCase() + str.slice(1)
    return toUpp
}

console.log(ucFirst("hellen"))

// checks for spam
function checkSpam(str) {
    let strToLower = str.toLowerCase()
    if (strToLower.includes("viagra") || strToLower.includes("xxx")) {
        console.log("true")
    } else {
        console.log("false")
    }
}

checkSpam('buy ViAgRA now') 

// checks the length of str and replaces the end with the ellipsis
function truncate(str, maxLength) {
    if (str.length > maxLength) {
        let newStr = str.slice(0, maxLength - 1);
        return newStr + '...';
    } else {
        return str;
    }
}

truncate("What I'd like to tell on this topic is:", 20);

//extracts and return number from a string
function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$10'))