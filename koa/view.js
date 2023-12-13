const Koa = require('koa');
const views = require('koa-views'); // 注册koa-views组件之后，会向context实例对象添加一个render方法
const path = require('path');

const app = new Koa();
/*
* 1. 第一个参数 path：路径 指定模板文件的目录
* 2. 第二个参数 options：配置 指定模板文件的后缀名
* */
app.use(views(path.join(__dirname, 'views/'), {extension: 'html'}));

app.use(async (ctx) => {
    // 注册了koa-views 之后才有 render 方法
    await ctx.render('template', {
        title: 'koa2',
        message: 'hello koa2'
    });
})

app.listen(5500, () => {
    console.log('服务器启动');
})