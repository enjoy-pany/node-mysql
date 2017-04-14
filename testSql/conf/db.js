// conf/db.js
// MySQL数据库联接配置
module.exports = {
	mysql: {
		host: '172.16.0.20', //172.16.0.20
		user: 'root',
		password: '123456',
		database:'talk', // 前面建的user表位于这个数据库中
		port: 3306
	}
};