// 引入 mysql 模块
const mysql = require("mysql");

// 创建 connection 实例
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

// 连接数据库
connection.connect();

// 往 student 表里增加数据，字段分别为 id name sex age ? 可以理解为占位符
// let sql1 = "INSERT INTO student(id,name,sex,age) VALUE(0,?,?,?)";
// let sqlParams1 = ["alin", 0, 18];

// 使用 connection.query 执行 sql 语句
// connection.query(sql1, sqlParams1, (err, results, fields) => {
//     if (err) throw err
//     console.log(results)
// });

// 往 student 表里更新数据 sex age 字段，通过 id 查找对应数据
// let sql2 = "UPDATE student SET sex = ?, age = ? WHERE id = ?";
// let sqlParams2 = [1, 25, 1]
// connection.query(sql2, sqlParams2, (err, results, fields) => {
//     if (err) throw err
//     console.log(results)
// });


// 往 student 表里删除数据, 删除 id 为 1 对应的数据
// let sql3 = "DELETE FROM student WHERE id = ?"
// let sqlParams3 = [1]
// connection.query(sql3, sqlParams3, (err, results, fields) => {
//     if (err) throw err
//     console.log(results)
// })


// 查询数据
// let sql4 = "SELECT * FROM student" // 查询所有数据
// let sql5 = "SELECT * FROM student WHERE id =?"
// let sqlParams5 = [2]
// // connection.query(sql4, (err, results, fields) => {
// //     if (err) throw err
// //     console.log(Array.isArray(results), results)
// // })
// connection.query(sql5, sqlParams5, (err, results, fields) => {
//     if (err) throw err
//     console.log(results)
// })

