//Array is an object
// java script array is resizable


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // it doesnt change the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it cut the value from given index and Change the original array
console.log("C ", myArr);
console.log(myn2);
console.log("----------------------------more about arrays---------------------------");
const Marvels_heros = ["Hulk", "Ironman", "Thor"]
const DC_Heros = ["Batman", "Superman", "Flash"]
// console.log(Marvels_heros.push(DC_Heros)); // push will create an array inside Marvel_heros array
// const all_heros = Marvels_heros.concat(DC_Heros); //it will combine two arrays into new array
// console.log(all_heros);

const new_array = [...DC_Heros, ...Marvels_heros,"hello"] // (...) spread operator=> it will combine multiple array into a single array
console.log(new_array);
const arr = [1,3,2,[3,9,8,12],0,74,[23,44,[44,99]]] // if you want to access 99 see below code
console.log(arr[6][2][1]);

// if you want single array from arr = [1,3,2,[3,9,8,12],0,74,[23,44,[44,99]]] you can use flat(depth)
const newArrayfromarr = arr.flat(Infinity)
console.log(newArrayfromarr);

//if you want to convert string into array see below code

const str = "Ankit"

const arrayFromString = Array.from(str)
console.log(arrayFromString);

//if you want to check weather retern element is arra or not
console.log(Array.isArray(arr));


const a = 10
const b = 20
const c = 30

const arrayn = Array.of(a,b,c)
console.log(arrayn);
