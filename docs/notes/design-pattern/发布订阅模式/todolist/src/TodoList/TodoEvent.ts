import { ITodo } from './TodoList'

class TodoEvent {
    //代办数组
    private todoData: ITodo[] = []

    public static create(): TodoEvent {
        return new TodoEvent();
    }

    //增加代办函数
    public addTodo(todo: ITodo): Promise<ITodo> {
        // 返回一个Promise对象
        return new Promise((resolve, reject) => {
            // 查找当前正文
            const _todo: ITodo = this.todoData.find((t) => t.content === todo.content);

            // 如果失败，返回失败内容
            if(_todo){
                console.log("该项已存在");
                return reject(1001);
            }

            // 否则添加一个待办
            this.todoData.push(todo);
            console.log(this.todoData);
            resolve(todo);
        });
    }

    //删除代办函数
    public removeTodo(id: number): Promise<number> {
        // 返回一个Promise对象
        return new Promise((resolve, reject) => {
            // 筛选id，找到对应的id
            this.todoData = this.todoData.filter((t) => t.id !== id);
            resolve(id)
        });
    }

    //切换待办函数
    public toggleTodo(id: number): Promise<number> {
        // 返回一个Promise对象
        return new Promise((resolve, reject) => {
            // 遍历整个待办数组
            this.todoData = this.todoData.map((t) => {
                // 找到对应id，修改待办属性
                if(t.id === id){
                    t.done = !t.done;
                    resolve(id);
                }
                return t;
            });
        });
    }
}

export default TodoEvent