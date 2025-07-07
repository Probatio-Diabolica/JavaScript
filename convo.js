/*
Conversions: making the sense out of memes
tbh, I don't know if these things will make any sense or not...

*/ 

function print(params) {
    console.log(params);
}


//convo 1: signed to unsigned and vice versa

let a = 10 , b = -10;

let c = -a , d = -b;

//I'm gussing c = -10 and b  = 10, let's see
print(c +" " +d); //perfect it works

/////////////////////////////////////////////////////////////////////////////////////////////////////
// new op:
let v = c ** 6; //its power btw
print(v);

////////////////////////////////////////////////////////////////////////////////////////////////////
//so far so good, life is still good
// also , '-' is not possible between two strs

let mf = "mf", hoe = "hoes";
print(typeof mf + hoe) ; //output : stringhoes why? operator precedence baby
print(typeof (mf + hoe)); //now its better

////////////////////////////////////////////////////////////////////////////////////////////////////
// speacial case of mongrels:
// dog2= x0BAE , hex are not a thing in js I guess
let dog1 = "Bow" , dog2 = 1001;
let interbredDoggy = (dog2+dog1);//ok so the output will be a string 
// but what's more interesting is that, this time we are following normal programming conventions that is  order of (dog2+dog1) matters for output, there's no precedence 

print(typeof (dog1 + dog2)+  interbredDoggy); //ok its string


// lol something new:
print(typeof (100 + ""));//that's another ay to convert an int to a string

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ok I think, this should do
print(true); //ofc true
print(+true); //1? well it converts the true to 1
print(1 + true);//2 ofc
print(true+2); //3
print("")// should be empty string right?
// yup, ok wbout this:
print(+""); //
print(+"we"); // this is NaN