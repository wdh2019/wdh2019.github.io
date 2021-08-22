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