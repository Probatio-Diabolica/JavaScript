"use strict";


let str = new String("Holla");
console.log(str.slice(0,4)); //slice=> [starting index, ending index)


const anstr = str.slice(-1,2);
console.log(anstr);

console.log(str.substring(-1,4));//ignores the neg

let x = new String("       hi               hello      ");
// console.log(x.trim()+90);
console.log(x.trimStart()+90);

//replace

const url="https://hearn.com/hearn%20hearn"

console.log(url.replace('%20',"-"));

console.log(url.includes("her"))

//at
let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.at(-4)); //both + and - idxs


console.log(sentence.blink());//deprecated

let a = "abc"
let b = "zde"
console.log(b.localeCompare(a));

