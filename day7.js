// Function can be declared without a parameter

// function without parameter,  a function which make a number square
/*
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

square() // 4

// function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed 

function printFullName() {
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() // calling a function
*/

// Function returning a value 
//Functions can also return values, if a function does not return values the value of the function is undefined.
/*
function printFullName()
{
    let firstName = 'Asabeneh';
    let lastName = 'Yetayeh';
    let space = ' ';
    let fullName = firstName + space + lastName;
    return fullName;
}
console.log(printFullName());
*/

/*
function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())
*/

//Function with a parameter
// In function we can pass different data types as a parameter(number, string, boolean, object function)

/*
// function with one parameter
function functionName(parm1) {
    //code goes her
}
functionName(parm1) // during calling or invoking one argument needed

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}

console.log(areaOfCircle(10)) // should be called with one argument

function square(number) {
    return number * number
}

console.log(square(10))
*/

//Function with 2 parameters

function functionName(parm1, parm2)
{
    // code goes over here
}
/*
functionName(parm1, parm2); 
{
    code goes here
}    // during calling or invoking two arguments needed
//Function without parameter doesn't take input, so lets make a function with parameters

function sumTwoNumbers(numOne, numTwo)
{
    let sum = numOne + numTwo;
    console.log(sum);
}
sumTwoNumbers(10, 20); // calling functions
*/
// if a function doesnt return it doesnt store data, so it should return

/*
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
*/

// FUNCTION WITH MANY OR MULTIPLE PARAMETERS

/*
function functionName(parm1, parm2, parm3,....)
{
    //code goes over here
}
functionName(parm1, parm2, parm3,.....);// during calling or invoking three arguments needed
*/

/*
function sumArrayValues(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));

const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(10));
*/

// FUNCTION WITH UNLIMITED NUMBER OF PARAMETERS
//Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a function which can take unlimited number of arguments. The way we do it has a significant difference between a function declaration(regular function) and arrow function.

//UNLIMITED NUMBER OF PARAMETERS IN REGULAR FUNCTION

// A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object insude the functions

/*
// Let us access the arguments object

function sumAllNums() {
    console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
*/

/*
// function declaration

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
*/

//UNLIMITED NUMBER OF PARAMETERS IN ARROW FUNCTIONS

//Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Anything we passed as argument in the function can be accessed as array in the arrow function

/*
// Let us access the arguments object

const sumAllNums = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

*/

/*
// function declaration

const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
*/

//ANONYMOUS FUNCTION OR FUNCTION WITHOUT A NAME

/*
const anonymousFun = function()
{
    console.log("I am an anonymous function and my value is stored in anonymousFun");
}
*/

//EXPRESSION FUNCTION

//Expression functions are anonymous functions. So, after we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.

/*
// Function expression
const square = function (n) {
    return n * n
}

console.log(square(2)) // -> 4
*/

