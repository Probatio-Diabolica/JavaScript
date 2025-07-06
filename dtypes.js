"use strict";
/*
    this actually says use, newer version of js...
    why?? why can't we configure the engire to do so? who's the genius behind this? Am I supposed to write this everytime?
    shouldn't the new code be compatible with the old one??
*/

// alert("Surprize motherfucker!")
/*
Unfortunately, this fuckery won't work because, this only works for web docs aka html. And it makes, sense because the v8 engine or gecko want the alert state to occur inside a web page
instead of your OS.
We can achieve this, like this:

remember, node is a JS runtime for your OS not your browsers
*/



// some datatypes
// number = 2 < 2^53
// bigint > number
// boolean
// string
// null : both type and a value
// undefined : not defined
// symbol : 

//object :

let a; // not null but undefined
// here comes the fuckry
console.log(typeof(a)); //obviously its undefined
console.log(typeof null) // object ??
console.log(typeof undefined) //undefined yeah makes sense

