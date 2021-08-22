/* 
    组合继承已经相对完善了，但还是存在问题：调用了2次父类构造函数。
    第一次是在 `new Anmial()`，第二次是在 `Animal.call()`。
    所以解决方案是不直接调用父类构造函数给子类原型赋值，而是通过创建空函数 F 获取父类原型的副本。
    寄生式组合继承写法上和组合继承基本类似，区别如下：
*/

- Dog.prototype = new Animal()
- Dog.prototype.constructor = Dog
+ let f = new F()
+ f.constructor = Dog
+ Dog.prototype = f

/* 
    稍微封装下上面添加的代码后：
*/
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}

function inheritPrototype(child, parent) {
    let prototype = object(parent.prototype)
    prototype.constructor = child
    child.prototype = prototype
}

inheritPrototype(Dog, Animal)

/* 
    如果你嫌弃上面的代码太多了，还可以基于组合继承的代码改成最简单的寄生式组合继承
*/
- Dog.prototype = new Animal()
- Dog.prototype.constructor = Dog
+ Dog.prototype = Object.create(Animal.prototype)
+ Dog.prototype.constructor = Dog
