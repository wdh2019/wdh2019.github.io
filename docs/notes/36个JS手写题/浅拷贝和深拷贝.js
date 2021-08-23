/* 
    浅拷贝：拷贝引用地址
*/
// 1. for-in 只循环第一层
function simpleCopy(obj1) {
    var obj2 = Array.isArray(obj1) ? [] : {};
    for(let i in obj1) {
        obj2[i] = obj1[i];
    }
    return obj2;
}

var obj1 = {
    a: 1,
    b: 2,
    c: {
        d:3
    }
}
var obj2 = simpleCopy(obj1);
obj2.a = 3;
obj2.c.d = 4;
console.log(obj1.a); // 1
console.log(obj2.a); // 3
console.log(obj1.c.d); // 4
console.log(obj2.c.d); // 4

// 2. Object.assign方法
var obj1 = {
    a: 1,
    b: 2
}
var obj2 = Object.assign(obj1);
obj1.a = 3;
console.log(obj2.a); // 3

// 3. 直接用=赋值
let a = [0,1,2,3,4], b = a;
console.log(a === b);
a[0] = 1;
console.log("b",b);


/* 
    深拷贝
*/
// 1. 采用递归去拷贝所有层级属性
function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    if(obj && typeof obj == 'object') {
        for(let key in obj) {
            if(obj.hasOwnProperty(key)) {
                //判断obj子元素是否为对象，如果是，递归复制
                if(obj[key] && typeof obj[key] == 'object') {
                    objClone[key] = deepClone(obj[key])
                } else {
                    // 如果不是，简单复制
                    objClone[key] = obj[key]
                }
            }
        }
    }
    return objClone
}
let c = 1, d = deepClone(c);
c = 2;
console.log("d",d);

// 通过 JSON 对象来实现深拷贝
function deepClone(obj) {
    var _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj)
    return objClone
}
// 缺点：无法实现对对象防范的深拷贝，会显示 undefined

// 通过 jQuery 的 extend 方法实现深拷贝
var array = [1,2,3,4]
var newArray = $.extend(true,[],array) // true为深拷贝，false为浅拷贝

// lodash函数库实现深拷贝
let result = _.cloneDeep(test)

// Reflect法
function deepClone(obj) {
    if(!isObject(obj)) {
        Reflect.ownKeys(cloneObj).forEach(key => {
            cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
        })
    }
    return cloneObj
}

// 如果对象的value都是基本类型的话，也可以用Object.assign来实现深拷贝，但是要把它赋值给一个空对象
var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign({}, obj);
obj1.a = 3;
console.log(obj.a); // 1

// 用slice实现对数组的深拷贝
var arr1 = ["1","2","3"];
var arr2 = arr1.slice(0);
arr2[1] = "3";
console.log("数组的原始值：" + arr1);
console.log("数组的新值：" + arr2);

// 用concat实现对数组的深拷贝
var arr1 = ["1","2","3"];
var arr2 = arr1.concat();
arr2[0] = "9";
console.log("数组的原始值：" + arr1); 
console.log("数组的新值：" + arr2); 

// 用Object.create达到深拷贝
function deepClone(initialObj, finalObj) {
    var obj = finalObj || {};
    for(var i in initialObj) {
        var prop = initialObj[i];
        if(prop === obj) {
            continue;
        }
        if(typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
            obj[i] = prop;
        }
    }
    return obj;
}

// 用扩展运算符实现深拷贝
var car = {
    brand: "BMN",
    price: "380000",
    length: "5米"
};
var car1 = {...car, price: "500000"};
console.log(car);
console.log(car1);