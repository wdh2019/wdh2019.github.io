# 使用Fetch请求文件，并下载到本地



## 问题描述

最近遇到需要向后端请求文件，并让用户下载到本地的需求。我第一时间想到的是原生的Fetch API，正好可以测试一下如何实际使用Fetch方法请求文件。

然而，当我一通搜索+复制黏贴以后，自信地告诉后端同学：“只需要给我一个能请求到文件的url和文件名”之后，后端同学一句“这些具体是指什么”，把我问蒙了。

因此，我想着搭建一个简易的前后端传输文件的场景，来测试一下如何利用Fetch方法解决上述的需求。



## 问题拆解

1. 前端如何使用Fetch方法，向后端请求文件。
2. 前端如何将请求到的文件下载到用户本地。



## 解决方案

### Part 1：使用Fetch方法，向后端请求文件

#### 前端

关于Fetch方法的使用，可以参考笔记中JS一章的对应内容。

大致代码：`fetch(url).then(res => res.blob()).then(blob => {})`

这里我使用了请求二进制大文件的对应方法`res.blob()`。

特别注意的是：`url`即后端同学问我的可以请求到文件的`url`，随后可以看到我在简易的后端里是如何处理这个`url`的。

#### 后端

我使用nodejs搭建了一个简易的后端，代码如下：

index.js

```javascript
const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(function(req,res){
    let pathname = url.parse(req.url).pathname; // 解析url
    console.log(pathname)
    
    fs.readFile(pathname.substr(1), function(err,data){ // 读取文件，文件名从pathname.substr(1)解析得到
        if(err){
            console.log(err)
            res.writeHead(404,{'Content-type': 'text/html'})
            res.end()
        }
        else {
            res.writeHead(200, {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'http://127.0.0.1:5500'}) //成功读取文件，加上Mime类型响应头和跨域响应头
            res.end(data); // 结束响应
        }
    })
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000')
```

服务器目录如下：

![fetch-server](./img/fetch-server.png)

需要注意以下几点：

- 我使用了`url.parse(req.url).pathname`获取了请求的`url`的路径名。
- 我使用了`fs.readFile()`根据处理后的路径名读取服务器上对应的文件。**因为index.js和请求的文件是同一级目录，所以读取文件的路径直接写成了文件名。如果要请求的文件不在同一级目录，要修改读取文件的路径。**
- 在文件读取成功的逻辑分支里，为了解决<u>**跨域问题**</u>，我在响应头里写入了`Access-Control-Allow-Origin`这一头部，并指定其值为前端所在的域名。
- 最后，我通过`res.end()`将读取的文件数据流作为响应内容，并结束响应。

整个后端的处理逻辑：解析`url`->读取文件->设置解决跨域问题的响应头->返回文件数据





### Part 2：将文件下载到本地

前端请求到文件数据以后，还要进行一步处理，使其可以将文件下载到本地。

这里我使用了`a`标签，设置其`download`属性，来进行下载。其他方案可以自行百度。

```javascript
blob => {
    let url = window.URL.createObjectURL(blob)
    let a = document.createElement('a')
    a.download = 'file1.md' // filename
    a.href = url
    a.click()
    window.URL.revokeObjectURL(url);
}
```

其中注释为`filename`的地方，上例为`file1.md`，其实只是指定了用户下载到本地的文件名，可以和服务器上的文件名不一样，相当于重命名了该文件。



### Part 3：完整流程

最后，附上全部代码和整体流程：

#### 前端

index.html

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API test</title>
</head>
<body>
    <button id="btn">点击下载文件</button>
    <script>
        document.querySelector('#btn').addEventListener('click',function(){
            fetch("http://127.0.0.1:3000/file.md")
            .then(res => res.blob())
            .then(blob => {
                let url = window.URL.createObjectURL(blob)
                let a = document.createElement('a')
                a.download = 'file1.md'
                a.href = url
                a.click()
                window.URL.revokeObjectURL(url);
            })
        })
        
    </script>
</body>
</html>
```

#### 后端

index.js

```javascript
const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer(function(req,res){
    let pathname = url.parse(req.url).pathname;
    console.log(pathname)
    
    fs.readFile(pathname.substr(1), function(err,data){
        if(err){
            console.log(err)
            res.writeHead(404,{'Content-type': 'text/html'})
            res.end()
        }
        else {
            res.writeHead(200, {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'http://127.0.0.1:5500'})
            res.end(data);
        }
    })
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000')
```

#### 流程

1. 将前端index.html页面通过VSCode的live server插件架设到`http://127.0.0.1:5500`

   ![fetch-frontend-page](./img/fetch-frontend-page.png)

2. 点击页面上的按钮，触发点击事件处理程序。在处理程序中，调用了Fetch方法向后端请求文件`file.md`，其中`url`为`http://127.0.0.1:3000/file.md`。

3. 后端接收到请求，解析`url`，获取到`pathname`变量为`/file.md`。

   

   ![fetch-server-console](./img/fetch-server-console.png)

   - 如图看到`pathname`变量为`/file.md`，应该对其进行处理才能获取对应的文件名。

4. 后端对`pathname`变量字符串进行切割，留下对应的文件名`file.md`，并读取文件。（注意该文件在服务器的目录结构）

5. 后端在响应体中返回文件数据。

6. 前端接收到文件数据，通过创建`a`标签的方法，将文件下载到本地。（下载到本地的文件名可以被重命名）

   ![fetch-frontend-downloadedFile](./img/fetch-frontend-downloadedFile.png)

因为我测试了很多遍，所以下载的文件名后跟了(3)，但是不影响我们验证了文件确实按照`filename`进行了重命名。



如有错误，欢迎指正！