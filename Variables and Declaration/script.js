// Words vs Keywords
// In JavaScript, words that have a special meaning and perform specific tasks are called keywords.

// var, let, const

// var a;
// var a = 12;

// let a;
// let a = 12;

// const a = 12;
// const a; // This is not allowed (we will discuss later)

// Declaration and Initialization

// var a; // Declaration
// var a = 12; // Declaration and Initialization

// let a;
// let a = 13; // First declare, then initialize

// var a = 12; // Variables declared with var are added to the window object
// var is function-scoped
// You can redeclare the same variable name without getting an error

// let a = 12;
// let a = 14; // Error: Cannot redeclare a let variable

// const discount = "lab";
// Once a const variable is assigned a value, it cannot be reassigned

// Scope (Global Scope, Block Scope, Function Scope)

// function abcd() {
//     var a = 12; // This variable can only be used inside this function
// }

// var a = 12; // This variable can be used throughout the program because it is in the global scope

// {
//     let a = 12; // A variable declared with let inside curly braces belongs to block scope
// }

// Reassignment and Redeclaration

// var a = 12;
// a = 32; // This is called reassignment because the value is changed

// let b = 12;
// b = 32; // This is also reassignment

// Redeclaration is allowed only with var, not with let

// var a = 20; // This is called redeclaration

// let b = 20; // Redeclaring a let variable causes an error

// Temporal Dead Zone (TDZ)
// The area where JavaScript knows that a variable exists,
// but you cannot access its value yet

// Hoisting Impact by Type
// Hoisting means that when a variable is created in JavaScript,
// its declaration part is moved to the top,
// while the initialization part remains in its original position

// const person = {
//     name: "Anil"
// };

// person.age = 19;

// console.log(person);

// const numbers = [1, 2];
// numbers.push(3); // Modifying the contents of the array is allowed
// console.log(numbers);