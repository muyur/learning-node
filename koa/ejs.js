// 使用ejs模板

const Koa = require("koa");
const path = require("path");
const views = require("koa-views");

const app = new Koa();

app.use(views(path.join(__dirname, "views"), { extension: "ejs" }));

// 使用ejs模板
let title = "ejs";
let content = "ejs模板";

app.use(async (ctx) => {
  await ctx.render("index", {
    title,
    content,
  });
});

app.listen(3000, () => {
  console.log("app started at port 3000");
});