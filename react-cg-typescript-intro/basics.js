// primitives: number, string, boolean[, null, undefined]
// complex: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Primitives
var age;
age = 12;
var userName;
userName = "Maximilian";
var isInstructor;
isInstructor = true;
var hobby;
hobby = undefined;
// Complex types
var hobbies;
hobbies = ["basketball", "ass-whippin"];
var person; // type: any => allows...anything, basic js really
person = {
    name: "Max",
    age: 32
};
// person = { isEmployee: false }; // not allowed
var people; // array of person(s)
// Type inference - initilaized vars will have type inferred...
var course = "React complete guide";
// course = 12345; // error, type was already infered to be 'string'
// Union types - allow more than one type
var variable = 12345;
variable = "Now I'm a string";
var player;
var players;
// Functions & Function Types
function subtract(a, b) {
    // redundant return type declaration
    return a - b;
}
var res;
// res = subtract(1, 2); // error
function printVal(value) {
    console.log(value);
    //   return 1; // error
}
// Generics
function insertAtBeginning(arr, val) {
    var newArray = __spreadArray([val], arr);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
