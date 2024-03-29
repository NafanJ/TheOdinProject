/* Introdcution */
// Define objects using object literal syntax
const myObject = {
    property: 'Hello World!',
    otherProperty: 100,
    "obnoxious property": function () {
        // do stuff!
    }
};

// Two ways to get info out of an object
// Dot Notation
myObject.property;

// Bracket Notation
myObject["obnoxious property"]

const variable = 'property'

myObject.variable; // Returns 'undefined'
myObject[variable] //Return Hello World!

// Lesson Overvieww

/* 
    How to write an object constructor and instantiate the object.

    Describe what a prototype is and how it can be used.

    Explain prototypal inheritance.

    Understand the basic do’s and don’t’s of prototypal inheritance.

    Explain what Object.create does.

    Explain what the this keyword is.
*/


// Objects as a desgin Pattern
// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
    name: "tim",
    marker: "X"
};

const playerTwo = {
    name: "jenn",
    marker: "O"
};

function printName(player){
    console.log(player.name) // Example one would require us to remember individual variable names
}

printName(playerOne)
printName(playerTwo)

// Object Constructors
function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){ // Can add functions to constructors <-- here is an anonymous function
        console.log(this.name)
    };
}

const playerThree = new Player('Steve', 'X')
console.log(playerThree.name)
playerThree.sayName() // Call object function 

// Exercise
console.log('Exercise:')
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return (title + ' by ' + author +', ' + pages +' pages, ' + read)
    }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read')
console.log(book1.info());

// The Prototype
// All objects in JS have a prototype, this is another object that the original object inherits form
// therefore the original object has access to all of it's prototypes methods and properties

// saves memory and allows for inheritance
console.log('The Prototype:')
// Accessing an object's prototype
console.log(Object.getPrototypeOf(playerThree))
console.log(Object.getPrototypeOf(playerThree) === Player.prototype); 

// Declaring a function in the protype for all objects to use
Player.prototype.sayHello = function(){
    console.log("Hey, I'm " + this.name + "! This is a prototype function");
};
playerThree.sayHello();

// Prototypal Inherritance
console.log('Prototypal Inheritance:')
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);
console.log(playerThree.valueOf());