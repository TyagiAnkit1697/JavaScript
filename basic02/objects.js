// we can create object in two different was
// => by using constructor (it will create singleton object) const objName = new Object() to create obejct
//=> by using Literals

const obj  = {               //literals object
    name: "Ankit",
    email: "ankit@gmail.com",
    rank: 110,
    isLoggedin: false,
    "Position": "Application Developer"    
}

// you can access the object using "."" or using "[""]"
//Syntax objectname.propertyname or objectName["PropertyName"]

console.log(obj.name);
console.log(obj["name"]);
console.log(obj["Position"]+" "+obj.Position);
console.log(`type of rank is ${typeof obj.rank} and type of name is ${typeof obj.name}
type of Position id ${typeof obj.Position}`);

 //to change the value of object properties see below code
 obj.email = "ankittyagi@yahoo.com"
console.log(obj.email);

obj.age = 26      // adding new properties in existing object
console.log(obj);

Object.freeze(obj) // now you cannot add or edit properties
obj.email = "ankittyagi@hotmail.com"
console.log(`after freeze ${obj.email}`);

const symbl = Symbol("key1")
console.log(typeof symbl);
// to use symbol as key see below code
const obj2  = {               //literals object
    name: "Depak",
    email: "deepak@gmail.com",
    rank: 110,
    isLoggedin: false,
    "Position": "Application Developer",
    [symbl]: "myKey"   // cannot access this by using ".", we have to use "[]"
}

console.log(`Type of symbl is ${typeof obj2[symbl]}`);
console.log(obj2);

// how to add function in objects
obj2.sum = function(a, b) {
    return a+b;
}
console.log(obj2);
console.log(obj2.sum); // it will return [Function (anonymous)]
console.log(obj2.sum(2,6));

// use of "this"

obj2.greeting = function(){
    console.log(`hello ${this.name}`);
}


console.log(obj2.greeting()); //it will return 'hello Depak undefined'
console.log(obj2.greeting);// it will return [Function (anonymous)]

// how to make object using Constructor
const employee = new Object()

employee.age = 26
employee.Name = "xyz",
employee.exp = "2 Years"
console.log(employee);

// we ccan create objects inside of object
const obj3 = {
    name: "Ankit",
    Address: {city: "Roorkee", Pin: 247661}
}
//how to access
console.log(obj3.Address.Pin);

// how to combine two or more object
const a = {1:"A", 2:"b"}
const b = {3:"C", 4:"D"}
// 1:
const c = {a,b} //it will create object inside of object
console.log(c);
//2
const d = Object.assign({}, a,b) // Object.assign(targget = {}, source = a,b)
// const e = Object.assign(a,b) //Object.assign(targget = a, source = b) it will copy all the properties in "a" as well as in "e" 
console.log(d);
// console.log(a)
// console.log(e);
// console.log(a===e);
//3
const f = {...a,...b}
console.log(f);

//objects inside array
const arr = [
    {a:"AA", b:"bb"},
    {c:"CC", d:"DD"},
    {e:"EE", f:"FF"} 
]

console.log(arr[1].c);

//some more functions
console.log(employee.hasOwnProperty("name"));//return true if object has mentioned property
console.log(Object.keys(employee)); // return array of keys of the obkect
console.log(Object.values(employee)); //return array valuse of the object
console.log(Object.entries(employee));// return array inside that array we have arrays of keys and values [ [ 'age', 26 ], [ 'Name', 'xyz' ], [ 'exp', '2 Years' ] ]


