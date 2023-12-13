// koa-parameter 主要用来校验传递过来的参数是否合法
const Koa = require("koa");
const cors = require("koa-cors")
const Router = require("koa-router");
const parameter = require("koa-parameter"); // 引入koa-parameter,可以校验参数

const app = new Koa();
app.use(cors())

const router = new Router();
router.get("/detail", async (ctx) => {
  try {
    // 参数验证
  ctx.verifyParams({
    id: {
      type: "string",
      required: false // 设置为可选参数
    }
  })
  ctx.body = "响应内容";
  } catch (error) {
   ctx.status = 422
   ctx.body = { message: error.message } 
  }
  
});
app.use(router.routes())

app.listen(3000, () => {
  console.log("server is running at port 3000");
});

parameter(app)
