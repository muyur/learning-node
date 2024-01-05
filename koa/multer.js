// koa-multer 用来处理mulipart/form-data类型的表单数据 文件
const Koa = require('koa')
const cors = require('koa-cors')
const Router = require('koa-router')
const parameter = require('koa-parameter')
const multer = require('koa-multer')

const app = new Koa()

app.use(cors())
// parameter(app)
// 存储文件
const storage = multer.diskStorage({
    // 存储文件的位置
    destination: (req, file, cb) => {
        cb(null, "public/upload/")
    },
    // 存储文件名
    filename: (ctx, file, cb) => {
        const filenameArr = file.originalname.split('.')
        cb(null, Date.now() + '.' + filenameArr.pop())
    }
})
const upload = multer({
  storage: storage,
  limits: {
    // 限制文件大小
    fileSize: 1024 * 1024
  }
})
const router = new Router()
// 单个文件上传
router.post('/upload', upload.single('file'), async (ctx, next) => {
  console.log(ctx.req.file.filename)
  ctx.body = {
    code: 200,
    msg: '上传成功',
    filename: ctx.req.file.filename
  }
})

app.use(router.routes())
app.use(router.allowedMethods())


app.listen(3000, () => {
  console.log('server is running at port 3000')
})