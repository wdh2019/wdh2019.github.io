/* 
    typeof 可以正确识别：Undefined, Boolean, Number, String, Symbol, Function 等类型的数据，
    但是对于其他的都会认为是 object，比如 Null, Date等，
    所以通过 typeof 来判断数据类型会不准确。
    但是可以使用 Object.prototype.toString 实现。
*/

function typeOf(obj) {
    let res = Object.prototype.toString.call(obj).slice(8,-1)
    return res
}

console.log(typeOf([]))
console.log(typeOf({}))
console.log(typeOf(new Date))
