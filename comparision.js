"use strict";

function pr(vr)
{
    console.log(vr);
}


//alright...let'see normal comprasions... nothing should go wrong right?

let a = 10;
let b = 0;

pr(a < b) ; ////ok normal stuff, nothing wrong.
pr(a > b) ; ////ok normal stuff, nothing wrong.
pr(a <= b); ////ok normal stuff, nothing wrong.
pr(a >= b); ////ok normal stuff, nothing wrong.


pr(null);

pr(b == 0)   ; //true, obvi
pr(b == null); //false, idk why
pr(b > null) ; //false, idk why
pr(b < null) ; //false, idk why

pr(b <= null); //true, wut
pr(b >= null); //true, wtfffffffffffff

/*
what the hell...

why is this so... what actually is null then...
they say, if null is being converted into 0, then wtf is going on

well... js being js... you can't apply your normal logic here. 
just understand that, undefined and null are type values  
*/

//strict checks
//they just simply allow a lil real logic. i.e, "2" can't be equal to 2, bc the types are different

pr("=============================================================================================================================================================");
pr(10==a);
pr("10"==a);
pr("10" === a); //this stops the conversion

