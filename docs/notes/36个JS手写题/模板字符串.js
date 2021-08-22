function render(template, data) {
    const reg = /\{\{(\w+)\}\}/ //模板字符串的正则
    if(reg.test(template)) { // 判断模板里面是否有模板字符串
        console.log(reg.exec(template))
        const name = reg.exec(template)[1] // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[name]) // 将第一个模板字符串渲染
        return render(template, data); // 递归渲染，并返回模板后的结构
    }
    return template // 如果模板没有模板字符串，直接返回
}

let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'
let person = {
    name: 'black',
    age: 21
}
console.log(render(template, person))