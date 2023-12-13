const { log } = require('console')
const fs = require('fs') // 文件系统模块，提供本地文件读写能力

// 读取文件
// fs.readFile(path, option, callback)
/**
 * path 文件路径
 * option 可选配置
 * callback 回调函数
 * fs.readFileSync 是同步操作，会阻碍同步代码执行
 */
// fs.readFile('./file.txt',  (err, data) => {
//     if (err) throw err
//     // buffer.toString() 可以将buffer数据转为字符串
//     console.log(1, data.toString())
// })
// let data = fs.readFileSync('./file.txt')
// console.log(2, data.toString())
// console.log('执行')


/**
 * 写入文件也可以创建文件
 * fs.writeFile(path, data, option, callback)
 * path 写入 | 创建 文件的路径
 * data 写入 | 创建 的数据
 * option 可选写入 | 创建 数据配置项
 * callback 写入 | 创建 文件后的回调函数
 * fs.writeFileSync(path, data, option) 是同步操作，会阻碍同步代码的执行
 */
fs.writeFile('./file.txt', '写入的数据', (err) => {
    if (err) throw err
    console.log('写入成功')
})
// let res = fs.writeFileSync('./file.txt', '同步写入数据')
// console.log(3, res)

// fs.appendFile() 追加文件内容而非覆盖原文

/**
 * 删除文件
 * fs.unlink(path, callback)
 * path 要删除的文件路径
 * callback 删除之后的回调
 * fs.unlinkSync(path) 是同步操作，会阻碍同步代码的执行
 */
// fs.unlink('./file.txt', (err) => {
//     if (err) throw err
//     console.log('删除成功')
// })
// let del = fs.unlinkSync('./file.txt')
// console.log(del)
// console.log('执行')