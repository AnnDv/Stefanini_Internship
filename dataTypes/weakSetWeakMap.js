/*
    Store "unread" flags
    - store the information in a datastructure that will be well-suited to give
    the answer "was the message read? for the given message object"
    Store read dates
    - store the information "when the message was read?" for the given message object
*/
const readMessage = new WeakSet();

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

readMessage.add(messages[0]);
readMessage.add(messages[1]);
// readMessage.add(messages[2]);
console.log("Was message 1 read? " + readMessage.has(messages[1]));

let storeDate = new WeakMap();

const dateMessage0 = new Date(2022, 3, 1);
const dateMessage1 = new Date(2022, 3, 3);
const dateMessage2 = new Date(2022, 4, 3);

storeDate.set(messages[0], dateMessage0); //assign value: date to key: message 0
storeDate.set(messages[1], dateMessage1);
storeDate.set(messages[2], dateMessage2);

messages.shift();
console.log(messages);