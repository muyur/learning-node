const Koa = require("koa");
// 路由中间件
const Router = require("koa-router");
// 解决跨域问题的中间件
const cors = require("koa-cors")
// 静态资源中间件，用来读取文件
const static = require("koa-static")


const router = new Router();

router
  .post("/login", async (ctx, next) => {
    ctx.body = "登录";
  })
  .get("/user", async (ctx, next) => {
    ctx.body = "用户";
  });

const app = new Koa();
// 解决跨域
app.use(cors())
app.use(router.routes());

app.listen(5500, () => {
  console.log("服务器启动");
});
