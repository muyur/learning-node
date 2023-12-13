const Koa = require("koa");
const cors = require("koa-cors");
const bodyParser = require("koa-body");

const app = new Koa();
app.use(cors());
app.use(bodyParser.koaBody());

// app.use(async (ctx) => {
//   console.log("query", ctx.query);
//   ctx.body = "返回用户数据";
// });
app.use(async (ctx) => {
  console.log("body", ctx.request.body);
  ctx.body = "返回登录数据";
});

app.listen(5500, () => {
  // console.log(bodyparser)
  console.log("服务器启动");
});
