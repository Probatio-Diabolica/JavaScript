// objects are placed in heaps, meaning any variable is js a reference to the resouce

let a = {
    ab:"hello",
    bc:"best of luck"
}

let b = a;

b.ab="No yu"

console.log(a , b);
