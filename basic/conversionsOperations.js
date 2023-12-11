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