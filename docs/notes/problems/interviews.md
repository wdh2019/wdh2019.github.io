---
title: 面试题
date: 2022-07-01 14:33:10
permalink: /pages/notes/interviews
categories:
  - 笔记
  	- 面试题
tags:
  - interviews
  - 面试题
---
# 面试题



## 缓存函数

### 题面

写一个缓存函数，该函数可以缓存其他函数。

当被缓存的函数的传参一致时，会返回缓存的结果。否则调用被缓存的函数返回结果。

```javascript
function add(a, b) {
	return a + b;
}

let func = cacheFunction(add); // 实现cacheFunction

console.log(func(1, 2)); //调用函数add返回结果
console.log(func(1, 2)); //返回缓存的结果
```

### 题解

```javascript
function cacheFunction(fn){
	const cache = Object.create(null);
	return ((...args) => {
		const hit = cache[args];
		return hit || (cache[args] = fn(...args));
	});
}
```

通过闭包保存一个对象 cache，并返回一个函数。每次调用这个返回的函数，查看 cache 中是否有 形参对应的属性。

若存在，表示击中缓存，返回属性的值。

若不存在，表示未命中缓存，调用传入的函数并将结果保存在 cache 对应的属性中。



可以对上述代码稍加修改，查看什么时候缓存命中：

```javascript
function cacheFunction(fn){
	const cache = Object.create(null);
	return ((...args) => {
		const hit = cache[args];
		if(hit){
			console.log("hit!");
			return hit;
		} else {
			console.log("miss!");
			return (cache[args] = fn(...args));
		}
	});
}
```



## 事件循环

### 题面

写出下列代码的输出结果：

```javascript
console.log('script start');

setTimeout(function() {
	console.log('timeout1');
}, 15);

new Promise(resolve => {
	console.log('promise1');
	resolve();
	setTimeout(() => console.log('timeout2'), 10);
}).then(function() {
	console.log('then1');
})

console.log('script end');
```

### 题解

简单遵循 先同步后异步，先微后宏

注意：

1. Promise 构造函数传入的函数中，仍是同步环境。所以`console.log('promise1')`是同步代码。
2. 注意2个`setTimeout`的延迟时间。

```javascript
script start
promise1
script end
then1
timeout2
timeout1
```



