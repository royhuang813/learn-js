//查看对象所有属性（只查看一级）    Object.keys(obj)
let obj = {
    k1: 1,
    k2: [],
    k3: {
        kk1: 11,
        kk2: 22
    },
    k4: function () { }
}
console.log(Object.keys(obj))   //['key1','key2','key3','key4']   返回所有属性名组成的一个数组


//删除属性  delete obj.property
let obj2 = {
    k1: 1,
    k2: [],
    k3: {
        kk1: 11,
        kk2: 22
    },
    k4: function () { }
}
delete obj2.k2 //删除成功后会返回true
delete obj2.kk //删除不存在的属性也是返回true
console.log(obj2.k2)    //undefined
console.log(obj2)   //没有k2属性了


//delete也无法删除继承的属性
delete obj2.toString    //toString是Object继承的属性，虽然返回true，但无法删除


//当该属性不准删除时，delete删除会返回false
let obj3 = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
})
console.log(obj3.p) //123
console.log(delete obj3.p); //由于配置了configurable，该属性不能被删除，所以返回false


// 判断属性是否存在：in
let obj4 = { a: 1, f: function () { } }
console.log('a' in obj4)    //true
console.log('f' in obj4)    //true
console.log('toString' in obj4) //toString是继承来的，也是true

//判断是否为自身属性：hasOwnProperty
let obj5 = { g: 1 }
console.log(obj5.hasOwnProperty('g'))   //true
console.log(obj5.hasOwnProperty('toString'))    //false，因为是继承来的，非自身

//for...in遍历对象key
let obj6 = { a: 1, b: 2, c: 3, d: 4 }
for (let key in obj6) {
    console.log(key)    //a、b、c、d    只会遍历可遍历的属性
}