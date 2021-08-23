/* 
    函数柯里化：是把接受多个参数的函数变换成接受一个单一参数的函数，并且返回接受余下的参数并且返回结果的新函数的技术。
    实现一个通用的柯里化函数，可以自动的将一个函数转换成多次传递参数，类似lodash
*/
function sum(a:number, b:number, c:number, d:number):number {
    return a + b + c + d;
}
// sum(1)(2,3)(4);
// 如果我想这样分步调用，该怎么办？
// 一般参数固定的情况下做柯里化。（函数的length属性就是参数的个数）

// 实现一个通用的柯里化函数，可以自动的将一个函数转换成多次传递参数，类似lodash
// currying(sum)(1)(2,3)(4) => sum(1,2,3,4)
const currying = (fn:Function) => {
    // sumArgs用于收集每次执行时传入的参数，第一次默认就是空的
    const exec = (sumArgs:any[] = []) => {
        // 如果当前传入的参数的个数 小于 函数的参数个数，需要返回一个新的函数，并且保留当前函数传入的参数
        // 如果 大于等于，执行 fn，输出结果
        if(sumArgs.length >= fn.length) {
            return fn(...sumArgs);
        } else {
            return (...args:any[]) => exec([...sumArgs, ...args])
        }
    }
    return exec();
}
console.log(currying(sum)(1)(2,3)(4))