/* 
    数组扁平化就是将[1,[2,[3]]]这种多层的数组拍平成一层[1,2,3]。
    使用 Array.prototype.flat 可以直接将多层数组拍平成一层：
*/
[1,[2,[3]]].flat(2) // [1,2,3]

/* 
    ES5 实现：递归
*/
function flatten(arr) {
    var result = []
    for(var i = 0, len = arr.length; i< len; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

/*
    ES6 实现：
*/
function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}