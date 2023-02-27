import { returnGreeting } from "./module7";
import * as allGreetingFunctions from './module7';  // imports all exported components in the module
import { returnGreeting as returnGreetingLength } from "./greetings-utilities-module";
import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);


returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'

