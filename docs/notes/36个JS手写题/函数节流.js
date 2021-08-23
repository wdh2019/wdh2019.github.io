function throttle(fn, time) {
    let nowTime;
    let lastTime;
    let self = this;
    return function(...args) {
        nowTime = +(new Date());
        if(!lastTime || nowTime - lastTime >= time) {
            fn.call(self, ...args);
            lastTime = nowTime;
        }
    }
}