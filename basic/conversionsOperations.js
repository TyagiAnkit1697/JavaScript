let score = "33"
let run = "33abc"
let nullvalue = null
console.log(typeof score);

let stringtoNumber = Number(score)
let stringToNumberRun = Number(run)
let nullToNumber = Number(nullvalue)

console.log(typeof(stringtoNumber));
console.log(typeof(stringToNumberRun))
console.log(stringToNumberRun) //it will NaN (not a number)
console.log(nullToNumber)

// true will convert into 1


// === check datatype as well as values inside the variabels
// == check only values inside the variables


// Datatype Summery
// 1 primitive datatype (Stored in stack memory)
// 7 types => String, Number, Boolean, null, Undefined, symbol, Bigint
// non-primitive( Stored in heap memory)
// Array, Objects, Function

//--------------------String-----------

const firstName = "Ankit"
const lastName = "Tyagi"

console.log(`my first name is ${firstName} and last name is ${lastName} :) `)

const newString = new String('hello Bahi');
console.log(newString)
console.log(newString.toUpperCase())
console.log(newString.charAt(6))
console.log(newString.trim())
console.log(newString.replace(" ",""))

//------------------Numbers-----------------

const num = 400
// console.log(num);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)