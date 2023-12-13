// 引入node.js 内置http模块， 用于创建服务器
const http = require("http");
// 引入 node.js 内置 url 模块， 处理请求路径相关
const url = require("url");
// 引入 node.js 内置 querystring 模块，处理post请求传递过来的数据
const querystring = require("querystring");
// 引入 node.js 内置 path 模块，处理路径相关
/**
 * path.join 用于拼接路径
 * path.resolve 用于拼接路径形成绝对路径
 * path.basename 用于从一个文件路径中获取文件名称 
 * path.extname 用户获取路径中的文件扩展名
 */
const path = require("path");
// 引入 node.js 内置 events 模块， 事件驱动机制
const events = require('events')
// 新建一个 EventEmitter 实例
const emitter = new events.EventEmitter()
/**
 * emitter.on 监听事件
 * emitter.emit 触发事件
 */


// 使用http.createServer创建服务器
const server = http.createServer((req, res) => {
  // 设置跨域
  res.setHeader("Access-Control-Allow-Origin", "*"); // 设置跨域来源，允许任意域的网页进行跨域请求
  res.setHeader("Access-Control-Allow-Headers", "X-Rquested-With"); // 指定哪些请求头可以被发送到服务器，允许客户端通过请求头中包含 X-Requested-With 字段进行跨域请求
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); // 设置可跨域请求的方法
  // res.setHeader("X-Powered-By", "3.2.1"); // 指示服务器所使用的技术或软件版本信息
  res.setHeader("Content-Type", "application/json;charset=utf-8"); // 用于指定响应实体的内容类型,表示响应实体的内容类型是 JSON，字符编码为 UTF-8

  // url.parse方法可以接收网址字符串，然后解析成网址对象  
  /**
   * 参数1：请求地址字符串
   * 参数2：quary属性是否会解析会对象 默认false 不会 | true 会
   * 参数3：url的协议地址未知时，是否把url里//后面的路径解析为host地址 默认false 不会 | true 会
   * -- 无法解析localhost --
   */
  const { pathname } = url.parse(req.url);
  if (pathname === "/user") {
    res.statusCode = 200;
    // res.end 返回给客户端的数据, 标志着响应完成，后续不要任何操作
    res.end("用户信息");
  } else if (pathname === "/login") {
    // 监听数据接收
    let data = "";
    req.on("data", (chunk) => {
      console.log("接收中：" + chunk);
      data += chunk;
    });
    // 监听数据接收完成
    req.on("end", () => {
      console.log("接收完成：" + data);
      const obj = querystring.parse(data);
      console.log("obj", obj);
    });
    // res.statusCode = 404 // 404之后不会执行 res.end
    res.statusCode = 200;
    const obj = {
      code: 200,
      data: "一些数据",
      msg: "登录成功",
    };
    res.end(JSON.stringify(obj));
  }

  //   const str = "http://www.baidu.com/index?search=ss&page=1"
  console.log(url.parse(req.url, true, true));

  // url.format 方法可以把 url 对象序列化成 url 字符串
  console.log(url.format(url.parse(req.url, true, true)));

  // url.resolve 方法可以拼接或替换 url 字符串
  /**
   * 参数1：要替换或者要拼接的地址
   * 参数2: 要替换或者要拼接的字符串
   * 参数2 会替换 参数1 中 / 后面的内容，如果 / 后面没有内容则会拼接上去
   */
  console.log(url.resolve("http://www.baidu.com/search", "one"));
  console.log(url.resolve("http://www.baidu.com/search/", "one"));

  console.log('path', path.join('a', 'b', 'c'))
  console.log('path', path.resolve('/a/b', '../c'))
});

// 设置需要监听的地址
const hostname = "127.0.0.1";
// 设置需要监听的端口号
const port = 3000;

// 使用serverl.listen 让服务器监听指定端口
server.listen(port, () => {
  console.log("服务器启动了");
});
