"use strict";

let x  = new Date(2025,6,24); //year, month-1, date T^T why JS why
console.log(x);
console.log(x.toDateString());
console.log(x.toUTCString());
console.log("-------------------------------------------------------------------------------------------------------");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//the above way was mid
// so here's  something better
x = new Date("2025-7-24");//also yea don `month-1` here
console.log(x);
console.log(x.toDateString());
console.log(x.toUTCString());
//!! btw we can also MM-DD-YYYY
console.log("-------------------------------------------------------------------------------------------------------");
x = new Date("7-24-2025");
console.log(x);
console.log(x.toDateString());
console.log(x.toUTCString());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//others
console.log(x.getTime());
// also we can have a comparision
// console.log(Date.now()-x.getTime()); //this is different
console.log(x.getDay()); //day
console.log(x.getMonth() + 1); //month - 1
console.log(x.getFullYear()); //year

