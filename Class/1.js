class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    };
    sayHi() {
        console.log(`我是${this.name}，今年${this.age}岁`)
    }
}


let p = new Person('老王', 20);
p.sayHi();