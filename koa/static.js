const Koa = require("koa");
const path = require("path");
const static = require("koa-static");

const app = new Koa();

app.use(static(path.join(__dirname, "./static")));

app.listen(5500, () => {
  console.log("服务器启动");
  console.log(path.join(__dirname, "./static/image/11.png"))
});
