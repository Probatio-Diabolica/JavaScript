"use strics"; // I have recently taken a liking to use this artifact because if the language you're using is a shithole of ambiguities its necassary to have this so that other's can understand your forbidden code in this forbidden language

function p(val)
{
    console.log(val);
}



/**
 * Offical docs says: there are only two types of data types
 ** Primitive  : basic data types | they are always call by value
 * string 
 * number
 * boolean
 * null
 * undefined
 * Symbol
 * BigInt
 
 ** Non- Primitive : also known as reference types | 
 * arrays
 * objects
 * functions <- I guess these fuckers are the objects of a class which denotes a function, kinda like std::function<T> I suppose
 * 
*/


/**
 * !! Type safety
 * this motherfucking language isn't type safe, and that's the issue, normally  I don't mind dynamic typing such as in python because python is consistent but this hellhole of a language is ambigious so
 * i'm not feeling well here
 */


// Symbols : idk what these are and idk why these are.

//-> symbols make a value unique 

// good luck understanding tf they mean by that

const sym = Symbol("fukers");
p(sym); // Symbol(fukers) ...uhh

//is sym unique ? or the fuckers?
const fuckers = Symbol(123);
p(fuckers);

p(sym === fuckers);
p(sym === sym); //ok these are the same things

