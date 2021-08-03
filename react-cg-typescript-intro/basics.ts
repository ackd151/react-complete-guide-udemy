// primitives: number, string, boolean[, null, undefined]
// complex: arrays, objects
// Function types, parameters

//Primitives
let age: number;
age = 12;

let userName: string;
userName = "Maximilian";

let isInstructor: boolean;
isInstructor = true;

let hobby: null;
hobby = undefined;

// Complex types
let hobbies: string[];
hobbies = ["basketball", "ass-whippin"];

let person: { name: string; age: number }; // type: any => allows...anything, basic js really
person = {
  name: "Max",
  age: 32,
};
// person = { isEmployee: false }; // not allowed

let people: { name: string; age: number }[]; // array of person(s)

// Type inference - initilaized vars will have type inferred...
let course = "React complete guide";
// course = 12345; // error, type was already infered to be 'string'

// Union types - allow more than one type
let variable: string | number = 12345;
variable = "Now I'm a string";

// Type aliases
type Player = { name: string; number: number };
let player: Player;
let players: Player[];

// Functions & Function Types
function subtract(a: number, b: number): number {
  // redundant return type declaration
  return a - b;
}
let res: string;
// res = subtract(1, 2); // error

function printVal(value: any): void {
  console.log(value);
  //   return 1; // error
}

// Generics
function insertAtBeginning<T>(arr: T[], val: T) {
  const newArray = [val, ...arr];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b"], "c");
