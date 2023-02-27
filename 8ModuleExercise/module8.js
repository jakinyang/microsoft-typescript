"use strict";
var Greetings;
(function (Greetings) {
    function returnGreeting(greeting) {
        console.log(`The message from namespace Greetings is "${greeting}".`);
    }
    Greetings.returnGreeting = returnGreeting;
})(Greetings || (Greetings = {}));
var GreetingsWithLength;
(function (GreetingsWithLength) {
    function getLength(message) {
        return message.length;
    }
    function returnGreeting(greeting) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is "${greeting}" and the length of the message is ${greetingLength} characters long.`);
    }
    GreetingsWithLength.returnGreeting = returnGreeting;
})(GreetingsWithLength || (GreetingsWithLength = {}));
const message = "Hello TypeScript!";
Greetings.returnGreeting(message);
GreetingsWithLength.returnGreeting(message);
