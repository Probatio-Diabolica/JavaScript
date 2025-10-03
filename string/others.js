"use strict";

let a = new String("freude schoner gutten funken");

let index = 5;

console.log(`char code = ${a.charCodeAt(index)} for char ${a[index]}`); //[]-> returns undefined if out of range
//vs
console.log(`char code = ${a.charCodeAt(index)} for char ${a.charAt(index)}`); //returns an empty string if out of range


console.log(`char code = ${a.charCodeAt(index)} for char ${a[index]}`); //[]-> returns undefined if out of range
//vs
console.log(`char code = ${a.codePointAt(index)} for char ${a.charAt(index)}`); //returns an empty string if out of range
// code point at -> returns full unicode code point. simply, it can handle emojis


let emo = "🔑";
console.log(`code at=> ${emo.charCodeAt(0)}//this is half arsed \nvs char code = ${emo.codePointAt(0)} //this is full unicode btw ${emo}`);


//concatinate
console.log(`${a.concat(' ',emo)}`);
console.log(a+` ${emo}`);

// a = a+` ${emo}`;
// console.log(a);

// + is preffered over concat

console.log(a.endsWith("funken")); //nothing serious, it js checks if str ends with a substr or not
console.log(a.endsWith("funky")) ; //nothing serious, it js checks if str ends with a substr or not
console.log(a.endsWith("unken")) ; //nothing serious, it js checks if str ends with a substr or not


//includes(), this one's fun
let hrn = "They teach the morals of a pig and the manners of a dancing master";
let pre = "teach", abs="hearn";

console.log(`${hrn.includes(pre)} ${hrn.includes(abs)}`);


