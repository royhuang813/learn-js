let arr = ['a', 'b', 'c', 'd', 1, { 'q': 1, 'w': 2 }, function () { },]
console.log(arr[0] === arr['0'])    //返回true，因为非字符串的键名(数组中是索引值)，一律会被转为字符串
console.log(Object.keys(arr))   //['0','1','2','3','4','5','6'] 索引值(string)组成的数组
console.log(Object.values(arr))   //['a','b','c','d',1,{ 'q': 1, 'w': 2 },[Function]]   每一项，注意函数的表达形式[Function]
console.log(Object.entries(arr))    //[ ['0','a'],['1','b'],['2','c'],['3','d'],['4',1],['5',{q:1,w:2}],['6',[Function]] ]  注意表达形式：[索引值(string),每项值]，最外层再套一个数组
// Object.keys、Object.values、Object.entries 总是返回数组
// Object.entries在【数组】和【对象】上表现不同：数组：['索引值',每项值];   对象：['属性',值]，即便属性是number，也会自动被转换为string
arr[9.1] = 900
arr[8.1] = 800
arr['aaa'] = 600    //这些赋值也是可以的，因为数组本质上也是一种对象


//length的坑，为避免最好不要手动设置数组下标，就让其保持默认的0,1,2,3……
let arr2 = ['a', 'b']
console.log(arr2.length)    //2
arr2['aaa'] = 'j'
arr2['bbb'] = 'k'
console.log(arr2)   //[ 'a', 'b', aaa: 'j', bbb: 'k' ]
console.log(arr2.length)    //2
arr2[26] = 'z'
console.log(arr2.length)    //27    length判断的长度 = 最大整数索引值 + 1，平时都拿来判断数组长度，那是因为一般不会去改变索引值0,1,2,3的规律
arr2.length = 0 //设为0，即清空数组，若设为其他数n，则会保留0~n，删掉n+1以及之后的值
console.log(arr2)   //[ aaa: 'j', bbb: 'k' ]，这是因为上面操作用了非数字的键名；一般来说都会返回[]，因为上一步清空了数组
//如果arr2.length设置一个大于数组length的值，则读取中间空出的值都会返回undefined

