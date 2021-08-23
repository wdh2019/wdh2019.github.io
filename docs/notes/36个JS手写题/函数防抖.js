/* 
    触发高频事件 N 秒后只会执行一次。如果 N 秒内事件再次触发，则会重新计时。
*/

// 简单版：函数内部支持使用 this 和 event 对象
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    }
}

// 使用
var node = document.getElementById('layout');
var count = 0;
function getUserAction(e) {
    console.log(this, e);
    node.innerHTML = count++;
}
node.onmousemove = debounce(getUserAction, 1000)
