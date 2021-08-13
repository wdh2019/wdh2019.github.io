import { ITodo } from "./TodoList";

class TodoDom {
    //待办节点
    private oTodoList: HTMLElement
    
    constructor(oTodoList: HTMLElement){
        this.oTodoList = oTodoList;
    }

    public static create(oTodoList: HTMLElement): TodoDom {
        return new TodoDom(oTodoList);
    }

    //增加待办节点
    public addItem(todo: ITodo): Promise<void> {
        return new Promise((resolve, reject) => {
            // 创建一个新的div节点
            const oItem: HTMLElement = document.createElement("div");
            oItem.className = "todo-item";
            oItem.innerHTML = this.todoView(todo);
            this.oTodoList.appendChild(oItem);
            resolve();
        });
    }

    //删除待办节点
    public removeItem(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            const oItems: HTMLCollection = document.getElementsByClassName("todo-item");
            Array.from(oItems).forEach((oItem) => {
                const _id = Number.parseInt(oItem.querySelector("button").dataset.id);
                if(_id === id){
                    oItem.remove();
                    resolve();
                }
            });
            reject();
        });
    }

    //切换待办节点
    public toggleItem(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            const oItems: HTMLCollection = document.getElementsByClassName("todo-item");
            Array.from(oItems).forEach((oItem) => {
                const oCheckBox: HTMLInputElement = oItem.querySelector("input");
                const _id = parseInt(oCheckBox.dataset.id);
                if(_id === id){
                    const oContent: HTMLElement = oItem.querySelector("span");
                    oContent.style.textDecoration = oCheckBox.checked ? "line-through" : "none";
                    resolve();
                }
            });
        });
    }

    private todoView({id, content, done}: ITodo): string {
        return `
            <input type="checkbox" ${done ? "checked" : ""} data-id="${id}" />
            <span style="text-decoration: ${done ? "line-through" : "none"}">${content}</span>
            <button data-id="${id}">删除</button>
        `
    }
}

export default TodoDom