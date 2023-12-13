// 安装并引入 koa
const koa = require("koa")

// 创建一个 koa 实例, 使用该实例创建服务器
const app = new koa()

// 使用中间件
/**
 * ctx 封装了 request response
 * next 进入执行下一个中间件函数
 */
app.use(async (ctx, next) => {
    console.log('中间件', ctx.request)
    await next()
})


app.listen(3000, () => {
    console.log('服务器启动')
})