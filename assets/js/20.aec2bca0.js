(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{456:function(t,a,e){"use strict";e.r(a);var _=e(20),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vue-vs-react"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-vs-react"}},[t._v("#")]),t._v(" Vue vs React")]),t._v(" "),e("p",[t._v("在面试的时候经常会被问到各种前端框架的对比，尤其是Vue 和 React 的区别，以及它们各自“鼓吹”的特性。所以特意在此收集一些答案。")]),t._v(" "),e("h2",{attrs:{id:"vue-和-react-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-和-react-的区别"}},[t._v("#")]),t._v(" Vue 和 React 的区别")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.zhihu.com/question/309891718/answer/1066629375"}},[t._v("参考知乎")])]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("Vue 使用了 web 开发者更熟悉的模板和特性")]),t._v("：比如 Vue 的单文件组件以template+script+style 组合，和 web 现有的 html+JavaScript+CSS 相契合。")]),t._v(" "),e("p",[e("strong",[t._v("React 的特色在于函数式编程的理念和丰富的技术选型")]),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("从使用习惯和思维模式上，Vue 对 web开发者更友好；React 更适合拥有函数式编程北京的开发者。")])]),t._v(" "),e("li",[e("p",[t._v("从"),e("strong",[t._v("响应式数据系统")]),t._v("上，Vue 使用了响应式和数据与视图的"),e("strong",[t._v("双向绑定")]),t._v("；React 是数据到视图的自上而下的"),e("strong",[t._v("单向数据流")]),t._v("，需要手动调用setState 改动数据。")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.jianshu.com/p/b7cd52868e95?from=groupmessage"}},[t._v("参考博客")])]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("数据是否可变")]),t._v("。")]),t._v(" "),e("p",[t._v("React 是"),e("strong",[t._v("函数式思想")]),t._v("，把组件设计成纯组件，状态和逻辑通过参数传入，因此是单向数据流，推崇结合immutable实现数据不可变。在 setState 之后会重新渲染。（手动）")]),t._v(" "),e("p",[t._v("Vue 是"),e("strong",[t._v("响应式思想")]),t._v("，即基于数据是可变的。通过对每个属性建立watcher来监听属性变化，然后响应式地更新对应的虚拟dom。（自动）")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("通过js来操作一切，或用各自的处理方式")])]),t._v(" "),e("p",[t._v("React 的思路是"),e("strong",[t._v("all in js")]),t._v("，设计了jsx，通过js来生成html，操作css等。")]),t._v(" "),e("p",[t._v("Vue 的思路是把html、js、css组合到一起，设计了单文件组件，把三者写到一个文件中。对html提供了模板引擎来处理。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("类式组件写法，还是声明式写法")])]),t._v(" "),e("p",[t._v("React 是"),e("strong",[t._v("类式")]),t._v("写法，api很少。")]),t._v(" "),e("p",[t._v("Vue 是"),e("strong",[t._v("声明式")]),t._v("写法，通过传入各种选项（tempate/props/data/methods...）。api和参数很多。")]),t._v(" "),e("p",[t._v("React结合TypeScript更容易，Vue则稍微复杂。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("什么功能内置，什么交给社区去做")])]),t._v(" "),e("p",[t._v("React 本身做的事情很少，有很多都是社区在做。")]),t._v(" "),e("p",[t._v("Vue 本身有很多东西是内置的，写起来方便一些。")]),t._v(" "),e("p",[t._v("比如 redux的combineReducer就对应vuex的modules，\n比如reselect就对应vuex的getter和vue组件的computed，")]),t._v(" "),e("p",[t._v("vuex的mutation是直接改变的原始数据，而redux的reducer是返回一个全新的state，所以redux结合immutable来优化性能，vue不需要。")])])]),t._v(" "),e("h2",{attrs:{id:"vue-js-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-是什么"}},[t._v("#")]),t._v(" Vue.js 是什么")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://v3.cn.vuejs.org/guide/introduction.html#vue-js-%E6%98%AF%E4%BB%80%E4%B9%88"}},[t._v("官网介绍")])]),t._v(" "),e("p",[t._v("Vue 是一套用于构建用户界面的"),e("strong",[t._v("渐进式框架")]),t._v("。与其他大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与"),e("a",{attrs:{href:"https://v3.cn.vuejs.org/guide/single-file-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("现代化的工具链"),e("OutboundLink")],1),t._v("以及各种"),e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue#components--libraries",target:"_blank",rel:"noopener noreferrer"}},[t._v("支持类库"),e("OutboundLink")],1),t._v("结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。")]),t._v(" "),e("h4",{attrs:{id:"_1-轻量级的框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-轻量级的框架"}},[t._v("#")]),t._v(" 1) 轻量级的框架")]),t._v(" "),e("p",[t._v("Vue.js 能够自动追踪依赖的模板表达式和计算属性，提供 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API，使读者更加容易理解，能够更快上手。")]),t._v(" "),e("h4",{attrs:{id:"_2-双向数据绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-双向数据绑定"}},[t._v("#")]),t._v(" 2) 双向数据绑定")]),t._v(" "),e("p",[t._v("声明式渲染是数据双向绑定的主要体现，同样也是 Vue.js 的核心，它允许采用简洁的模板语法将数据声明式渲染整合进 DOM。")]),t._v(" "),e("h4",{attrs:{id:"_3-指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-指令"}},[t._v("#")]),t._v(" 3) 指令")]),t._v(" "),e("p",[t._v("Vue.js 与页面进行交互，主要就是通过内置指令来完成的，指令的作用是当其表达式的值改变时相应地将某些行为应用到 DOM 上。")]),t._v(" "),e("h4",{attrs:{id:"_4-组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-组件化"}},[t._v("#")]),t._v(" 4) 组件化")]),t._v(" "),e("p",[t._v("组件（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。")]),t._v(" "),e("p",[t._v("在 Vue 中，父子组件通过 props 传递通信，从父向子单向传递。子组件与父组件通信，通过触发事件通知父组件改变数据。这样就形成了一个基本的父子通信模式。")]),t._v(" "),e("p",[t._v("在开发中组件和 HTML、JavaScript 等有非常紧密的关系时，可以根据实际的需要自定义组件，使开发变得更加便利，可大量减少代码编写量。")]),t._v(" "),e("p",[t._v("组件还支持热重载（hotreload）。当我们做了修改时，不会刷新页面，只是对组件本身进行立刻重载，不会影响整个应用当前的状态。CSS 也支持热重载。")]),t._v(" "),e("h4",{attrs:{id:"_5-客户端路由"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-客户端路由"}},[t._v("#")]),t._v(" 5) 客户端路由")]),t._v(" "),e("p",[t._v("Vue-router 是 Vue.js 官方的路由插件，与 Vue.js 深度集成，用于构建单页面应用。Vue 单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来，传统的页面是通过超链接实现页面的切换和跳转的。")]),t._v(" "),e("h4",{attrs:{id:"_6-状态管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-状态管理"}},[t._v("#")]),t._v(" 6) 状态管理")]),t._v(" "),e("p",[t._v("状态管理实际就是一个单向的数据流，State 驱动 View 的渲染，而用户对 View 进行操作产生 Action，使 State 产生变化，从而使 View 重新渲染，形成一个单独的组件。")]),t._v(" "),e("h2",{attrs:{id:"react-js-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-js-是什么"}},[t._v("#")]),t._v(" React.js 是什么")]),t._v(" "),e("p",[t._v("React 是一个用于构建用户界面的 JavaScript 库。")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://baijiahao.baidu.com/s?id=1680404563951597974&wfr=spider&for=pc"}},[t._v("React 特点")])]),t._v(" "),e("h4",{attrs:{id:"_1-声明式设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-声明式设计"}},[t._v("#")]),t._v(" 1) 声明式设计")]),t._v(" "),e("p",[t._v("React采用声明范式，可以轻松描述应用。")]),t._v(" "),e("h4",{attrs:{id:"_2-高效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-高效"}},[t._v("#")]),t._v(" 2) 高效")]),t._v(" "),e("p",[t._v("React通过对DOM的模拟，最大限度地减少与DOM的交互。")]),t._v(" "),e("h4",{attrs:{id:"_3-灵活"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-灵活"}},[t._v("#")]),t._v(" 3) 灵活")]),t._v(" "),e("p",[t._v("React可以与已知的库或框架很好地配合。")]),t._v(" "),e("h4",{attrs:{id:"_4-jsx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-jsx"}},[t._v("#")]),t._v(" 4) JSX")]),t._v(" "),e("p",[t._v("JSX是JavaScript语法的扩展。React开发不一定使用JSX，但我们建议使用它。")]),t._v(" "),e("h4",{attrs:{id:"_5-组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-组件"}},[t._v("#")]),t._v(" 5) 组件")]),t._v(" "),e("p",[t._v("通过React构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。")]),t._v(" "),e("h4",{attrs:{id:"_6-单向响应式的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-单向响应式的数据"}},[t._v("#")]),t._v(" 6) 单向响应式的数据")]),t._v(" "),e("p",[t._v("React实现了单向相应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。")]),t._v(" "),e("h3",{attrs:{id:"hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hook"}},[t._v("#")]),t._v(" Hook")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://react.docschina.org/docs/hooks-intro.html"}},[t._v("Hook 简介")])]),t._v(" "),e("p",[t._v("Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。")]),t._v(" "),e("h4",{attrs:{id:"动机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),e("ul",[e("li",[t._v("在组件之间复用状态逻辑很难。")]),t._v(" "),e("li",[t._v("复杂组件变得难以理解。")]),t._v(" "),e("li",[t._v("难以理解的 class。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);