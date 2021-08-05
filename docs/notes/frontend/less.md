# less



## 注释

`//`：不会被编译到css文件中

`/**/`：会编译到css文件中



## 变量

用`@`声明，比如`@color:pink`，`@selector:#wrap`

1. 作为普通属性值使用，直接使用`@color`
2. 作为选择器和属性名来使用，加一层括号`@{selector}`
3. 作为 URL ，加一层括号`@{url}`
4. 变量的延迟加载

```less
.brass {
	@var: 2;
	three: @var; //3
	@var: 3;
}
```

块级作用域



## 嵌套规则

### 基本嵌套规则

父子关系

```less
#wrap {
	position: relative;
	width: 300px;
	height: 400px;
	.inner {
		width: 100px;
		height: 100px;
		background: pink
	}	
}
```

`#wrap` 和`.inner`是父子元素的关系，最内层相当于`#wrap .inner`

### &的使用

平级关系

```less
#wrap {
	position: relative;
	width: 300px;
	height: 400px;
	.inner {
		width: 100px;
		height: 100px;
		background: pink;
		&:hover {
			background: yellow;
		}
	}
}
```

`.inner`和`:hover`是平级的，最内层相当于`#wrap .inner:hover`



## 混合

将一系列属性从一个规则集引入到另一个规则集的方式。

### 普通混合

```less
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.inner {
  .center;
  background: pink;
}

.inner2 {
  .center;
  background: deeppink;
}
```

编译成.css：

```css
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.inner {
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  background: pink;
}

.inner2 {
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  background: deeppink;
}
```

编译器自动将定义的混合黏贴到你调用它的地方。

- 同时本身也会输出到css文件中。



### 不带输出的混合

如果不需要其本身输出到css文件中，则定义时加上`()`。

```less
.center() {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.inner {
  .center;
  background: pink;
}

.inner2 {
  .center;
  background: deeppink;
}
```

编译成.css

```css
.inner {
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  background: pink;
}

.inner2 {
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  background: deeppink;
}
```



### 带参数的混合

定义和调用混合时可以携带参数。

```less
.center(@w,@h,@c) {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: @w;
	height: @h;
	background-color: @c;
}
.inner {
  .center(100px, 100px, pink);
}

.inner2 {
  .center(200px, 200px, deeppink);
}
```



### 形参默认值

```less
.center(@w:100px, @h:100px, @c:pink){
	...
}
```

- 为三个形参分别设置了默认值：100px 100px pink



### 具名实参

```less
.inner {
	.center(@c:black)
}
```

- 指定了传入的参数`@c`的值为 black



### 匹配模式

可以规定不同的形参，在调用时传入实参时进行匹配。

以下规定了第一个形参可以是`L`、`R`、`T`、`B`。调用时传入`R`进行匹配，匹配到样式`.triangle(R,@w,@c)`。

```less
// 定义
.triangle(@_){
	width: 0px;
	height: 0px;
	overflow: hidden;
}

.triangle(L,@w,@c){
	border-width: @w;
	border-style: dashed solid dashed dashed;
	border-color: transparent @c transparent transparent;
}

.triangle(R,@w,@c){
	border-width: @w;
	border-style: dashed dashed dashed solid;
	border-color: transparent transparent transparent @c;
}

.triangle(T,@w,@c){
  border-width: @w;
  border-style: dashed dashed solid dashed;
  border-color: transparent transparent @c transparent;
}

.triangle(B,@w,@c){
  border-width: @w;
  border-style: solid dashed dashed dashed;
  border-color: @c transparent transparent transparent;
}

// 调用
.inner{
  .triangle(R,40px,black)
}
```



### 运算

加减乘除

```less
.inner {
	width: (100+100px)
}
```

- 计算只需要一方带单位，如上例会被编译成 `200px`





