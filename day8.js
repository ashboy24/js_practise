//WINDOW GLOBAL OBJECT
//Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.

/*
a = 'Javascript'; // declaring a variab;e without let or const make it available in window object and this found anywhere
b = 10; // This is a global scope variable and found in the window object
function letsLearnScope()
{
    console.log(a, b);
    if(true)
    {
        console.log(a, b);
    }
}
console.log(a, b);

*/

// A global declared variable can be accesssed everywhere in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.

/*
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
    }
    console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible
*/


//Local scope
//A variable declared as local can be accessed only in certain block code.

//Block Scope
//Function Scope

/*
let a = 'JavaScript';
let b = 10;
function letsLearnScope() 
{
    console.log(a, b);
    let value = false;

    if (true)
    {
        let a = 'Python';
        let b = 20;
        let c = 30;
        let d = 40;
        value = !value;
        console.log(a, b, c, value);
    }
//we can not access c because c's scope is only the if block
console.log(a, b, value);
}
letsLearnScope();
console.log(a, b);
*/

// A variable declared with var only scoped to function but variable declared with let or const is block scope. Block in javascript is a code in between two curly brackets ({})
/*
function letsLearnScope()
{
    var gravity = 9.81;
    console.log(gravity);
}

if(true)
{
    var gravity = 9.81;
    console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for(var i = 0; i < 3; i++)
{
    console.log(i); // 0, 1, 2
}
console.log(i); // 3
*/

// In ES6 and above there is let and const, so you will not suffer from sneakiness of var. When we use let out variable is block scoped and it will not infect other parts of our code.

/*
function letsLearnScope()
{
    const gravity = 9.81;
    console.log(gravity);
}
letsLearnScope();

if(true)
{
    const gravity = 9.81;
    console.log(gravity);
}

for(let i = 0; i < 3; i++)
{
    console.log(i); // 0, 1, 2
}
*/

// The scope let and const are same. The difference is only reassigning. We cannot change or reassign the value of the const variable. I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for an array, object, arrow function and function expression.


//OBJECT: Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.

/*
const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle);
*/

/*
const person = {
    firstName: 'Asabeneh', 
    lastName: 'Yetayeh',
    age: 250, 
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ], 
    isMarried: true
}
console.log(person);
*/


//GETTING VALUE FROM AN OBJECT

// We can access values of object using two methods

// - using . followed by key name if the key-name is a one word
// - using square bracket and a quote

/*
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.getFullName())
// Asabeneh Yetayeh

*/

// SETTING A NEW KEY FOR AN OBJECT

//An object is a mutable data structure and we can modify the content of an object after it gets created.

//Setting a new keys in an object

/*
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person)
console.log(person.getPersonInfo());
*/

//OBJECT METHODS
//There are different methods to manipulate an object. Let us see some of the available methods.

// Object.assign: To copy an object without modyfying the original object
/*
const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki', 
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher', 
    address: {
        street: 'Heitaminenkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getPersonInfo: function(){
        return `I am ${this.firstName} and i live in ${this.city}, ${this.country}. I am ${this.age}.`;
    }
}

// Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);


//Getting object keys using Object.keys()
// Object.keys: To get the keys or properties of an object as an array

const copyPerson = Object.assign({}, person)
console.log(copyPerson);
*/

// Getting object keys using Object.keys()
//Object.keys: to get the keys or properties of an object as an array.

const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country', 'city', 'skills', 'title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address);
console.log(address); //['street', 'pobox', 'city']

// Getting object keys and values using Object.entries()

//Object.entries: To get the keys and values in an array
/*
const entries = Object.entries(copyPerson);
console.log(entries);
*/

// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object
/*
console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('score'));
*/

