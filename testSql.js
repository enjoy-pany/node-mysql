//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'pany#1234',
    database:'test'
});

connection.connect();
//查询
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
// connection.query('select * from `appoint`', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('查询结果为: ', rows);
// });
connection.query('update appoint set start_time = ? , end_time = ? , date_time = ? where s_id= ? and t_id = ? and tag_id = ? and course_id = ?', ['2017-03-11 22:00','2017-03-11 23:00','20170311_48','1','1','262601','575114'], function(err, result) {
    if (err) throw err;
    if(result.affectedRows == 0){
        console.log('查询失败，你输入的条件不存在！')
    }else{
        console.log(result);
    }
    console.log('\n');
    //关闭连接
connection.end();
});

// connection.query('select id from user where user_name = ?','lucy', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('查询结果为: ', rows);
// });

