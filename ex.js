// 1. shuffle the numbers
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].shuffle();
// expected output: same array but in a random order

// 2. get random number
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].getRandomNumber();
// expected output: a random number from the list

// 3. Break the date object
const regularDate = new Date();
console.log(regularDate.toAwesomeDate());
// expected output: Today is { day }, and it's an awesome day!

// 4. Add awesome to all strings
const myString = "plain string without awesomeness...";
console.log(myString.toAwesome());
// expected output: "plain string without awesomeness... is now awesome!!!"

// 5. Remove all white spaces from string
const myString2 = "plain string with a lot of spaces...";
console.log(myString.toZeroSpace());
// expected output: "plainstringwithalotofspaces...""

// 6. All dogs bark
// Create a constructor function that logs "bark!" to console everytime a dog is created, but counting each instance
const dog1 = new Dog();
// expected output: "bark! 1"
const dog2 = new Dog();
// expected output: "bark! 2"
const dog3 = new Dog();
// expected output: "bark! 3"
