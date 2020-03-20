// typeof
let str = 'string',
    num = 123,
    nan = NaN,
    bigInt = 123n,
    bool = true,
    nA,
    unde = undefined,
    voi = void 0,
    nul = null,
    arr = [],
    object = {},
    symbol = Symbol("id"),
    func = function () { };

console.log(typeof str);    //str
console.log(typeof num);    //number
console.log(typeof nan);    //number
console.log(typeof bigInt);    //bigint
console.log(typeof bool);   //boolean
console.log(typeof nA);   //undefined
console.log(typeof unde);   //undefined
console.log(typeof voi);    //undefined
console.log(typeof nul);    //object
console.log(typeof arr);    //object
console.log(typeof object); //object
console.log(typeof symbol); //symbol
console.log(typeof func);   //function

//instanceof
