/* 
    JSONP核心原理：script标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于GET请求。
    达到的效果：
    <script type="text/javascript">
        window.jsonpCallback = function(res) {
            console.log(res)
        }
    </script>
    <script src="http://localhost:8080/api/jsonp?id=1&cb=jsonpCallback" type="text/javascript">
*/
const jsonp = ({url, params, callbackName}) => {
    const generateUrl = () => {
        let dataSrc = '';
        for(let key in params) {
            if(params.hasOwnProperty(key)) {
                dataSrc += `${key}=${params[key]}&`;
            }
        }
        dataSrc += `callback=${callbackName}`;
        return `${url}?${dataSrc}`;
    }
    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script');
        scriptEle.src = generateUrl(); // 生成script标签，src 类似 http://localhost:8080/api/jsonp?id=1&cb=jsonpCallback
        document.body.appendChild(scriptEle);
        window[callbackName] = data => { // 在window对象上定义callbackName函数
            resolve(data);
            document.removeChild(scriptEle);
        }
    })
}