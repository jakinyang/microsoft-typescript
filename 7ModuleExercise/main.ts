import { returnGreeting } from "./module7";
import * as allGreetingFunctions from './module7';  // imports all exported components in the module
import { returnGreeting as returnGreetingLength } from "./greetings-utilities-module";

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'