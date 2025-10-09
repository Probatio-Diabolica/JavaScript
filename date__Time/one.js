"use strict";


let date = new Date(1764990000000);
console.log(date);

//by default, it returns the current date
// but these two are different btw

console.log(new Date());
// 2025-10-04T13:55:04.002Z


console.log(Date());
//Sat Oct 04 2025 19:25:04 GMT+0530 (India Standard Time)

// both have different outputs, why?
//// fuck because one is a constructor of the Date class while other is a function that returns a string... I hate this language
//note: because the last is the string... we do the this trick on the date class.

console.log(new Date().toString()); //Sat Oct 04 2025 19:29:37 GMT+0530 (India Standard Time)

//similarly,
console.log(new Date().toUTCString()); //Sat, 04 Oct 2025 14:00:09 GMT <-- UTC string

console.log(new Date().toISOString()); //2025-10-04T14:01:03.533Z, the default one

console.log(new Date().toLocaleString()); //10/4/2025, 7:31:58 PM <--- that's even nice, it gves in local time

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(typeof Date()); //string <- a func that returns string

console.log(typeof new Date()); //object [same as in `typeof new Date`]

console.log(typeof Date); // see a function
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
