// 声明方式
// 【普通声明】，称之为：函数的声明
function add(x, y) {
    return x + y
}
add(1, 2)


    // 【匿名函数】
    (function (x, y) {
        return x + y
    })

    // 若要立即执行匿名函数，可加()
    (function (x, y) {
        return x + y
    }(1, 2))

// 也可将匿名函数赋值给一个变量，称之为：函数的表达式
let sum = function (x, y) {
    return x + y
}
sum(1, 2)

// 如果在函数的表达式中的function后面带上函数名，只在内部有效
let sum = function fn(x, y) {
    return x + y
}
// 这里的fn，指代函数表达式本身，作用有两点：
// 1. 在函数内部调用自身，递归用
// 2. 方便debug，有名字会显示函数名，不然就是匿名函数


// 【构造函数】
let sum = new Function('x', 'y', 'return x + y')
// 等同于：
function sum(x, y) {
    return x + y
}
// Function构造函数接受3个参数，除最后一个参数是sum函数的函数体，其他参数都是sum函数的参数
// 可传递任意数量的参数给Function构造函数，只有最后一个参数被当做函数体，其余都是参数
// 如果只传一个参数，则直接当做函数体；不传则没有