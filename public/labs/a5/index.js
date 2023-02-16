// alert('Hello World!');
console.log('Hello World!');

// Variables and constants
console.log('Variables and constants');
global1 = 10;
console.log(global1);

var functionScoped = 2;
console.log(functionScoped);

let blockScoped = 5;
console.log(blockScoped);

const constant1 = global1 + functionScoped - blockScoped;
console.log(constant1);

// Data types
console.log('Variable types');
let numberVar = 123;
console.log(numberVar);

let floatingPointNum = 234.345;
console.log(floatingPointNum);

let stringVar = 'Hello World!';
console.log(stringVar);

let booleanVar = true;
console.log(booleanVar);

let isNumber = typeof numberVar;
console.log(isNumber);

let isString = typeof stringVar;
console.log(isString);

let isBoolean = typeof booleanVar;
console.log(isBoolean);

// Boolean data types
console.log('Boolean Variables');

let true1 = true;
console.log(true1);

let false1 = false;
console.log(false1);

let false2 = true1 && false1;
console.log(false2);

let true2 = true1 || false1;
console.log(true2);

let true3 = !false2;
console.log(true3);

let true4 = numberVar === 123;
console.log(true4);

let true5 = floatingPointNum !== 321.432;
console.log(true5);

let false3 = numberVar < 100;
console.log(false3);

let sortaTrue = '1' == 1
console.log(sortaTrue);

let notTrue = '1' === 1
console.log(notTrue);

// Conditional Operators
console.log('If-else');
if (true1) {
	console.log(true);
}

if (!false1) {
	console.log('!false1');
} else {
	console.log('false1');
}

// Ternary conditional
console.log('Ternary conditional operator');
let loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

// Functions
// 1. Legacy ES5: function <functionName> (<parameterList>) { <functionBody> }
console.log('Legacy ES5 function')

function add(a, b) {
	return a + b;
}

const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// 2. ES6: Arrow functions
console.log('New ES6 arrow functions');
const subtract = (a, b) => {
	return a - b;
}

const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// Implied Returns
console.log('Implied return');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// Optional parenthesis and parameters -> Single parameters
console.log('Parenthesis and parameters');
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
console.log(twoSquared);
const threePlusOne = plusOne(3);
console.log(threePlusOne);

// Arrays
// Can group together values of different data types, e.g., number arrays,
// string arrays, and even a mix and match of data types in the same array
console.log('Arrays');
let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1);
let stringArray1 = ['string1', 'string2'];
console.log(stringArray1);
let variableArray1 = [
	functionScoped,
	blockScoped,
	constant1,
	numberArray1,
	stringArray1
];
console.log(variableArray1);

// Array index and length
console.log('Array index and length');
const length1 = numberArray1.length;
console.log(length1);
const index1 = numberArray1.indexOf(3);
console.log(index1);

// Adding and Removing Data to/from Arrays
console.log('Add and remove data to arrays');
// adding new items
numberArray1.push(6);
stringArray1.push('string3');
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// For loops
console.log('For loops');
for (let i = 0; i < stringArray1.length; i++) {
	const string1 = stringArray1[i];
	console.log(string1);
}

// Lambda functions
// 1. Map
// Iterates over an array's values, applies a function to each value, and
// collates all the results in a new array
console.log('Map function');
const squares = numberArray1.map(square); // square() function
console.log(squares);
const cubes = numberArray1.map(a => a * a * a);
console.log(cubes);

// 2. Find
// Can search for an item in an array and return the element it finds.
// The find function takes another function as an argument -> predicate.
// The predicate should return true if the element is the one you're looking
// for. It is invoked for each of the elements in the array and when the
// function returns true, the find function stops because it has found the
// element that it was looking for.
console.log('Find function');
const four = numberArray1.find(a => a === 4);
console.log(four);
const string3 = stringArray1.find(a => a === 'string3');
console.log(string3);

// 3. Find index
// Alternatively, can use findIndex function to determine the index where
// an element is located inside an array.
console.log('Find index');
const fourIndex = numberArray1.findIndex(a => a === 4);
console.log(fourIndex);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(string3Index)

// 4. Filter
// Can look for elements that meet a criteria and collate them into a new array.
console.log('Filter function');
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
console.log(numbersGreaterThan2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(oddNumbers);

/* Template Strings */
console.log('Template strings');
const five = 2 + 3;
const result1 = "2 + 3 = " + five;  // String concat
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2)

/* DOM Manipulation */
document.write('<h2>Writing to the DOM</h2>');
document.write('Welcome to JavaScript!');
document.write('<h2>Calculating an HTML string</h2>');
const renderTodos = (todos) => `
    <ul>
        ${todos.map(todo => `<li>${todo}</li>`).join('')}
    </ul>
`;
const todos = ['Pickup kids', 'Feed dogs'];
let html = renderTodos(todos);
document.write(html);

/* jQuery */
// The jQuery function can manipulate the DOM in many ways, but a
// common practice is to pass it an initialization function
const init = () => {
	console.log('Hello world from jQuery');
	
	/* Binding to the DOM */
	// One of jQuery's strength is to bind to the DOM by referring to different
	// parts using CSS selectors
	// #id
	// .class
	const bindById = $('#bind-by-id');
	const bindByClass = $('.bind-by-class');
	console.log('Binding to the DOM');
	console.log(bindById);
	console.log(bindByClass);
	
	/* Changing style programmatically */
	const changeStyle = $('#change-style');
	changeStyle.css(
			'color', 'red'
	)
	const changeStyle2 = $('.change-style');
	changeStyle2.css(
			'color', 'blue'
	)
	
}

// The jQuery script declares global function called jQuery and its alias $
$(init);

// jQuery waits for the document to load, the DOM to be generated, and then
// it invokes the initialization function.
// The function doesn't need to be called init, but it is a common name.

