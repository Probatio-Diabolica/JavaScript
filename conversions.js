// pri(val)
// {
//     console.log(val);
// };

let fucker = "kid";
console.log(typeof(fucker));

let numericFucker = "1121";
console.log(typeof(numericFucker));

let fuckerInNumeric = Number(numericFucker);
console.log(fuckerInNumeric + " " +typeof(fuckerInNumeric))
//easy?
/*
NAh, we're playing js, ofc its not easy
*/

let bitch = "1122numericFucker";
let reimu = Number(bitch);

console.log(reimu + " " + typeof(reimu)); 
/*
expectations = 1122
reality = NaN

// yup these were mine expectations before I ran this code in JS. idk why I thought so, its not bad but its not good either, 
// it would be better if we've got an exception, so that we can manually assign it, now we have to do something like:
-> if(reimu === NaN){ reimu = 100;}

*/ 
if(reimu===NaN) reimu = 100; //reimu is NaN, but it's not changing
console.log(reimu + " " + typeof(reimu));


if(reimu==NaN) reimu = 100; //reimu is Nan, not changing either
console.log(reimu + " " + typeof(reimu));


/*
[Update]
$ We fucking can't, why?? why JS why ?? :p

!! btw null == 0; 

// :3, that's the only good thing about this
*/ 


//pssss:: you wanna know what works?
if(reimu !== NaN) reimu = 100;
console.log(reimu + " " + typeof(reimu) + "\tFucking Holy earth mommy why this works");

/*
[Update #2]
FUCK YOU THIS IS STILL WRONG BECAUSE WHAT IF reimu IS 2345678, then reimu will be = 100


this is the correct way*/ 
if(Number.isNaN(reimu)) reimu = 100;




//basic conversions :
/*
type => convertsto
true => 1
false => 2
"123" => 123
"123a" => NaN
*/

let  hall = 1;

//ok why this is true.... oh god
let kitchen = "hello";
let isSanaeHere = Boolean(kitchen);
console.log(isSanaeHere);

/*
concept of truthy and falsy != true and false, its approximation not precision

only these things are false:
false
0
-0
""
NaN
undefined
null

*/
