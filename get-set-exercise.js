/**
 * Build a primitive storage, that inherits from a CustomErrorHandler class
 * 
 * Requirements:
 * As a user I should be able to add data to the primitive storage: eg. ```myPrimitiveStorage.typeOfPrimitiveToAdd = primitiveValue```
 * As a user I should be able to output the storage state (entire storage or certain primitives storage)
 * As a user I should see a successful message, when the primitive was saved successfully
 * As a user I should see a fail message when an incorrect assignments was tried
 * As a user I am able to input data collections also (arrays with numbers, for example, instead of a single number)
 * As a user I can see a log history, with all logs
 * 
 * Be creative, as much as the language allows, and make sure you have user experience in mind (clear and easy to understand warnings, console info)
 * Use set/get where it makes sense to be used
 */

// example usage:
const myPrimitiveStorage = new PrimitiveStorage();

myPrimitiveStorage.newNumbersToAdd = 5;          //correct assignment to the numbers storage, outputs a message to inform the user
// notice that "newNumbersToAdd" is not a function
console.log(myPrimitiveStorage.integersStorage); // expected output: [ 5 ]
myPrimitiveStorage.newNumbersToAdd = [ 20, 54 ]; //correct assignment to the numbers storage, outputs a message to inform the user
console.log(myPrimitiveStorage.integersStorage); // expected output: [ 5, 20, 54 ]
myPrimitiveStorage.newNumbersToAdd = "some string"; // failed assignment, output a message to inform the user that he assigned a string to the numbers storage
console.log(myPrimitiveStorage.integersStorage); // expected output: [ 5, 20, 54 ]
//
myPrimitiveStorage.newStringToAdd = "some string";//correct assignment to the strings storage, outputs a message to inform the user
console.log(myPrimitiveStorage.stringsStorage);  // expected output: [ "some string" ]
myPrimitiveStorage.newStringToAdd = 20;           // failed assignment, output a message to inform the user that he assigned a number to the strings storage
console.log(myPrimitiveStorage.stringsStorage);  // expected output: [ "some string" ]
