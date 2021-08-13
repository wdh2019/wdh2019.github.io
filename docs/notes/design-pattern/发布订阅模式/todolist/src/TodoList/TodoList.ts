//1.确定一个ITodo类型 
export interface ITodo {
    id: number //id
    content: string //正文
    done: boolean //是否完成
}
//2.
class TodoList {
    //私有的节点属性
    private oTodoList: HTMLElement
    //私有消息队列
    private message: Object = {}

    constructor(oTodoList: HTMLElement){
        this.oTodoList = oTodoList;
    }

    //初始化观察者，暴露该方法，由于待会会操作dom，所以还要传入一个总dom参数
    public static create(oTodoList: HTMLElement): TodoList {
        return new TodoList(oTodoList);
    }

    public on(type: string, fn: Function){
        // 如果没有该属性，就初始化一个空数组
        if(!this.message[type]){
            this.message[type] = []
        }
        // 如果有该属性，就往里push一个新fn
        this.message[type].push(fn);
    }

    public off(type: string, fn: Function){
        // 判断有没有订阅
        if(!this.message[type]) return;
        // 判断有没有fn这个参数
        if(!fn){
            // 如果没有fn，就删掉整个事件
            this.message[type] = undefined;
            return;
        }
        // 如果有fn，就只删除数组中的fn函数
        this.message[type] = this.message[type].filter((item: Function) => item !== fn);
    }
    public emit<T>(type:string, param: T){
        // 执行的是那个数组
        let i:number = 0;
        // 待执行的函数数组
        let handlers: Function[];
        // 每次执行都是一个单独的Promise
        let res: Promise<unknown>;
        handlers = this.message[type];
        // 如果数组长度不为0，才执行
        if(handlers.length){
            //Promise.then的形式
            res = handlers[i](param);
            while(i < handlers.length - 1){
                i++;
                res = res.then((param) => {
                    return handlers[i](param);
                })
            }
        }
    }
}

export default TodoList