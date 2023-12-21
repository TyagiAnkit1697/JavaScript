let date = new Date();
console.log(date);
// console.log(date.getDate())
console.log(`toLocaleDateString(): ${date.toLocaleDateString()}`)
console.log(`toLocaleString(): ${date.toLocaleString()}`)
console.log(`toLocaleTimeString: ${date.toLocaleTimeString()}`)
console.log(`Time in IST format: ${date.toLocaleString(undefined, {
     timeZone: 'Asia/Kolkata'
    //  weekday: "long"
     })}`)