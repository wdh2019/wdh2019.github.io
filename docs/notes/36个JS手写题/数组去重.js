/* 
    ES5 实现
*/
function unique(arr) {
    var res = arr.filter(function(item, index, array) {
        return array.indexOf(item) === index
    })
    return res
}

/* 
    ES6 实现
*/
var unique = arr => [...new Set(arr)]