// instanceof 检查构造函数的原型对象prototype，是否在实例对象的原型链上
// example: instance instanceof constructor  ->  boolean
// 等同于: constructor.prototype.isPrototypeOf(instance)  ->  boolean

// 若实例的原型链上只有null，instanceof判断不准，本质上null也是object，历史原因造成的
//只要对象的原型不是null，instanceof就准确
console.log(typeof null);   //object
console.log(null instanceof Object);    //false

//typeof无法区分Array、Object，所以要用instanceof区分
console.log('数组-Array', [] instanceof Array);   //true
console.log('对象-Object', {} instanceof Object);  //true
console.log('对象-Array', {} instanceof Array);   //false
console.log('数组-Object', [] instanceof Object);   //true 因为数组本身也是一种对象
console.log('函数-Function', function () { } instanceof Function);   //true
console.log('函数-Object', function () { } instanceof Object);   //true 函数本身也是一种对象

//instanceof不适用简单类型的值，即string、number、boolean
console.log('string' instanceof String); //false

//对于undefined、null，总是返回false
console.log(undefined instanceof Object); //false
console.log(null instanceof Object); //false