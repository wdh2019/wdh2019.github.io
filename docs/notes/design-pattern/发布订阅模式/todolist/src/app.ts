import TodoList, { ITodo } from './TodoList/TodoList'
import TodoEvent from './TodoList/TodoEvent'
import TodoDom from './TodoList/TodoDom'

((document) => {
    //todoList业务节点
    const oTodoList: HTMLElement = document.querySelector(".todo-list");
    //todoList的添加按钮
    const oAddBtn: HTMLElement = document.querySelector(".add-btn");
    //todoList的文本框
    const oInput: HTMLInputElement = document.querySelector(".todo-input input");

    const todoList: TodoList = TodoList.create(oTodoList);
    const todoEvent: TodoEvent = TodoEvent.create();
    const todoDom: TodoDom = TodoDom.create(oTodoList);

    const init = (): void => {
        //订阅事件
        todoList.on("add", todoEvent.addTodo.bind(todoEvent));
        todoList.on("add", todoDom.addItem.bind(todoDom));
        todoList.on("remove", todoEvent.removeTodo.bind(todoEvent));
        todoList.on("remove", todoDom.removeItem.bind(todoDom));
        todoList.on("toggle", todoEvent.toggleTodo.bind(todoEvent));
        todoList.on("toggle", todoDom.toggleItem.bind(todoDom));
        //绑定事件
        bindEvent(todoList, oTodoList, oAddBtn, oInput);
        //触发事件
    }

    function bindEvent(todoList: TodoList, list: HTMLElement, btn: HTMLElement, input: HTMLInputElement){
        // 为添加按钮绑定一个点击事件
        btn.addEventListener(
            'click',
            function(){
                const val: string = input.value.trim();

                if(!val.length){
                    return;
                }

                todoList.emit<ITodo>("add", {
                    id: new Date().getTime(),
                    content: val,
                    done: false
                })

                input.value = "";
            },
            false
        );
        // 事件委托
        list.addEventListener(
            'click',
            function(e: MouseEvent){
                const tar = e.target as HTMLElement;
                const targetName = tar.tagName.toLowerCase();

                if(targetName === "input" || targetName === "button"){
                    const id: number = parseInt(tar.dataset.id);

                    switch(targetName){
                        // 为所有的checkbox添加一个切换事件
                        case "input":
                            todoList.emit<number>("toggle", id);
                            break;
                        // 为所有的删除按钮添加一个删除事件
                        case "button":
                            todoList.emit<number>("remove", id);
                            break;
                        default:
                            break;
                    }
                }
            },
            false
        );
    }

    init();
})(document)