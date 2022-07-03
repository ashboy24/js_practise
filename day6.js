/*
const countries = ['Finland', 'Sweden', 'Denmark', 'Nowray', 'Iceland'];
const newArr = [];
for(let i = 0; i < countries.length; i++)
{
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);
console.log(countries);
*/

/*
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < numbers.length; i++)
{
    sum = sum + numbers[i];
}
console.log(sum);
*/

/*
const numbers = [1, 2, 3, 4, 5];
const newArr = []
let sum = 0;
for(let i = 0; i < numbers.length; i++)
{
    newArr.push(numbers[i]**2);
}
console.log(newArr);
*/

// for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array

/*
for (const element of arr) {
    // code goes here
}
*/

/*
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
    console.log(num)
}

// 1 2 3 4 5

for (const num of numbers) {
    console.log(num * num)
}

// 1 4 9 16 25

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
    sum = sum + num
    // can be also shorten like this, sum += num
    // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
    console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}

*/

// break is used to interrupt a loop
/*
for(let i = 0; i <= 5; i++)
{
    if(i == 3)
    {
        break;
    }
    console.log(i)
}
*/

// we use the keyword continue to skip vertain iterations
/*
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}

// 0 1 2 4 5
*/

//Iterate 0 to 10 using for loop, do the same using while and do while loop
/*
for(let i = 0; i<=10; i++)
{
    console.log(i);
}
*/

/*
let i = 0;
while (i <= 10) {
    console.log(i)
    i++;
}
*/

/*
let i = 0;
do
{
    console.log(i);
    i++
}
while(i <= 10)
*/

// iterate 0 to n using for loop in javascript
/*
let n = 10;
for(let i = 0; i <= n; i++)
{
    console.log(i);
}
*/

/*
for(var i = 1; i <= 7; i++)
{
    console.log("# ".repeat(i));
}
*/

/*
for(let i = 0; i <= 10; i++)
{
    product = i * i;
    console.log(`${i} * ${i} = ${product}`);
}
*/

/*
console.log("i   i^2   i^3");
for(let i = 0; i <= 10; i++)
{
    square = i * i;
    cube = i * i * i;
    console.log(`${i}  ${square}  ${cube}`);
}
*/

//Use for loop to iterate from 0 to 100 and print only even numbers
/*
for(let i = 0; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}
*/

// Use for loop to iterate from 0 to 100 and print only odd numbers

/*
for(let i = 0; i <= 100; i++)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
}
*/

//Use for loop to iterate from 0 to 100 and print only prime numbers
/*
const lowerNumber = parseInt(prompt("Enter the lower number: "));
const higherNumber = parseInt(prompt("Enter higher number: "));
console.log(`The prime number between ${lowerNumber} and ${higherNumber} are: `);

for(let i = lowerNumber; i <= higherNumber; i++)
{
    let flag = 0;
    if(i%j == 0)
    {
        flag = 1;
        break;
    }
}

if(i > 1 && flag == 0)
{
    console.log(i);
}
*/

// Use for loop to iterate from 0 to 100 and print the sum of all numbers
/*
let sum = 0;
for(let i = 0; i <= 100; i++)
{
    sum += i;
}
console.log(sum);
*/

// Use for loop to iterate from 0 to 100 and print the sum of all numbers

/*
let even_sum = 0;
let odd_sum = 0;
for(let i = 0; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        even_sum = even_sum + i;
    }
    else if(i % 2 != 0)
    {
        odd_sum = odd_sum + i;
    }
}
console.log(even_sum);
console.log(odd_sum);
*/

// Develop a small script which generate array of 5 random numbers

// using the method of push
/*
const ARRAY_LENGTH = 6;
const random_array = [];
for(let i = 0; i < ARRAY_LENGTH; i++)
{
    random_array.push(Math.random());
}
console.log(random_array);
*/

//using the method of map
/*
const ARRAY_LENGTH = 5;
Array.from(Array(ARRAY_LENGTH)).map(x=>Math.random());
console.log(Array);
*/


//Develop a small script which generate a six characters random id:

/*
function makeid(length)
{
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for(let i = 0; i < length; i++)
    {
        result = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
console.log(makeid(10));
*/

// Write a script which generate a random hexadecimal number: 

/*
let letters = "123456789ABCDEF";
let color = "#";
for(let i = 0; i < 6; i++)
{
    color = color + letters[Math.floor(Math.random()*16)];
}
console.log(color);
*/

// Write a script which generates a random rgb color number

/*
function random(number)
{
    console.log(Math.floor(Math.random()*number));
}
function randomColor()
{
    console.log('rgb('+random(255)+','+random(255)+','+random(255)+')');
}
*/
