function Animal(name) {
    this.name = name
    this.getName = function() {
        return this.name
    }
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype = new Animal()

/* 
    借用构造函数实现继承解决了原型链继承的2个问题：引用类型共享问题和传参问题。
    但是，由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会调用一遍方法；
    同时，父类的构造函数被调用了两次。
*/ 