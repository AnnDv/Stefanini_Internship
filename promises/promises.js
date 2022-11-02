/* 
    Delay with a promise
    write a function that returns a promise. It should resolve after 
    miliseconds, so that we can add .then to it
*/
function delay(ms) {
    const promise = new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    });

    return promise;
}

delay(3000).then(() => console.log("runs after 3 seconds"));
