
// getPrototypeOf -----------------------------------------------
const myObject = {
    someProp: "someValue"
};

//
console.log(myObject); // {someProp: "someValue"}
console.log(Object.getPrototypeOf(myObject)); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ .....
console.log(myObject.__proto__) // Deprecated! // // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ .....
console.log(myObject.hasOwnProperty(__proto__)) // false
console.log(myObject.constructor) // f Object()

// instanceof -----------------------------------------------

function Animal(name) {
    this.name = name;
}

const dog = new Animal('Azorel');

console.log(dog instanceof Animal);
// expected output: true

console.log(dog instanceof Object);
// expected output: true

// Duplicate properties -----------------------------------------------

function Animal(name, size, words) {
    this.name = name;
    this.size = size;
    this.words = words;
    this.speak = function () {
        return this.words;
    }
    this.getSize = function () {
        return this.size;
    }
}

const dog = new Animal('Cici', 20, "ham ham");
const bear = new Animal('Beary', 2000, "what bears say?");

console.log(dog.speak()); // "ham ham"
console.log(bear.speak());// "what bears say?"


// Avoid duplicate properties -----------------------------------------------

function Animal(name, size, words) {
    this.name = name;
    this.size = size;
    this.words = words;
}

Animal.prototype.speak = function () {
    return this.words;
}
Animal.prototype.getSize = function () {
    return this.size;
}

const dog = new Animal('Cici', 20, "ham ham");
const bear = new Animal('Beary', 2000, "what bears say?");

console.log(dog.speak()); // "ham ham"
console.log(bear.speak());// "what bears say?"

// Set prototypeOf -----------------------------------------------

const Animal = {
    speak: function () {
        return this.words;
    },
    getSize: function () {
        return this.size;
    }
}

function Dog(name, size, words) {
    this.name = name;
    this.size = size;
    this.words = words;
}

const dog = new Dog('Cici', 20, "ham ham");
Object.setPrototypeOf(dog, Animal);
console.log(dog.speak()); // "ham ham"

// -----------------------------------------------

function Animal() { }
function Dog() { }

Dog.prototype = new Animal();
// or
// Dog.prototype = Object.create(Animal.prototype);

const chihuahua = new Dog();
console.log(Object.getPrototypeOf(chihuahua));
// expected output: Animal {}

console.log(Dog.prototype.isPrototypeOf(chihuahua));
// expected output: true

console.log(Animal.prototype.isPrototypeOf(chihuahua));
// expected output: true

// Class Basic example -----------------------------------------------

class Dog {
    constructor(name, size, words) {
        this.name = name;
        this.size = size;
        this.words = words;
    }
    speak() {
        return this.words;
    }
    getSize() {
        return this.size;
    }
}

const myDog = new Dog('Cici', 20, "ham ham");
console.log(myDog.speak())

// Extends Basic -----------------------------------------------

class Animal {
    constructor(name, size, words) {
        this.name = name;
        this.size = size;
        this.words = words;
    }
    speak() {
        return this.words;
    }
    getSize() {
        return this.size
    }
}
class Dog extends Animal {
    peeOnPeople() {
        return "only dogs do that..."
    }
}
const myDog = new Dog('Cici', 20, "ham ham");
console.log(myDog.peeOnPeople())

// using "this" in subclass -----------------------------------------------

class Animal {
    constructor(name, size, words) {
        this.name = name;
        this.size = size;
        this.words = words;
    }
    speak() {
        return this.words;
    }
    getSize() {
        return this.size
    }
}
class Dog extends Animal { }

// The above line is interpreted by default like this
// class Dog extends Animal {
//     constructor(...args) {
//         super(...args);
//     }
// }

class BadDog extends Dog {
    peeOnPeople() {
        return this.name + " is a bad dog";
    }
}

const myDog = new BadDog('Cici', 20, "ham ham");
console.log(myDog.peeOnPeople())

// super -----------------------------------------------

class Animal {
    constructor(name, size, words) {
        this.name = name;
        this.size = size;
        this.words = words;
    }
    speak() {
        return this.words;
    }
    getSize() {
        return this.size
    }
}
class Dog extends Animal {
    constructor(type, ...args) {
        super(...args);
        this.type = type; 
    }

    getSize() {
        return super.getSize + ' cm';
    }
}

class BadDog extends Dog {
    peeOnPeople() {
        return this.name + " is a bad dog";
    }
}

const myDog = new BadDog("Ceva", 'Cici', 20, "ham ham");
console.log(myDog.peeOnPeople())
