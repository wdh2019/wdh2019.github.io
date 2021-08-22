function Animal(name) {
    this.name = name
    this.colors = ['black', 'white']
}
Animal.prototype.getName = function() {
    return this.name
}

function Dog(name, age) {
    Animal.call(this, name)
    this.age = age
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog1 = new Dog('奶昔', 2)
dog1.colors.push('brown')
let dog2 = new Dog('哈赤', 1)
console.log(dog2) // {name: "哈赤", colors:["black", "white"], age:1}

/* 
    组合继承结合了原型链和盗用构造函数，将两者的优点集中了起来。
    基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
    这样就可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
*/