namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string) {
      console.log(`The message from namespace Greetings is "${greeting}".`);
    }
  }

  export namespace GreetingsWithLength {
    function getLength(message: string) {
      return message.length;
    }

    export function returnGreeting(greeting: string) {
      let greetingLength: number = getLength(greeting);
      console.log(`The message from namespace GreetingsWithLength is "${greeting}" and the length of the message is ${greetingLength} characters long.`);
    }
  }
}
const message = "Hello TypeScript!";
AllGreetings.Greetings.returnGreeting(message);
AllGreetings.GreetingsWithLength.returnGreeting(message);

import greet = AllGreetings.Greetings;

greet.returnGreeting(message);