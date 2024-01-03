function SayNyName(){
    console.log("Ankit");
}

//SayNyName => reference, Functioncalling=> SayNyName()
SayNyName()

//function with parameter

function Sum(num1, num2){
    console.log(num1+num2);
}
Sum(3,7) // if we call sum without arguments it will return undefined

//return in function

function multiplication(num1, num2){
    return num1*num2
}
const mul = multiplication(5, 6)
console.log(mul);

function check(username){ // we can give default value in parameter "function check(username = "xyz")"
    if(!username){ // this will work like if(username === undefined)
        console.log(" Please enter user name");
        return
    }
    return `${username} is just logged in`
}

console.log(check("ankit"));
console.log(check()); // return undefined
console.log(check(""));// return undefined
console.log(check(null));// return undefined

//how to pass object in functions

const user = {
    Name: "ankit",
    age: 26
}

function obj(userInfo){
    console.log(`welcome ${userInfo.Name} you are ${userInfo.age} years old`);
}
obj(user);
obj({Name: "Ashish",   
age: 29})  // passing object inside function argument while method call
// obj()// will return error

//passing array in function argument
const arr = [344,897,887,900]
function secondElementofArray(array){
    console.log(`second element of array is ${array[1]}`);
}
secondElementofArray(arr)
secondElementofArray([66,87,11,654])

//how to give parameter if you dont know how much parameter o wiil recieve during method call

function variableParameters(...num){// "..." rest operator to recieve variable parameter
    return num // it will return an array
}

// "..." is called rest and spread operator, depend upon its usecase. if we use in function parameter it called as rest operator
//whereas if we use it to combine array or object we will called it as spread operator 