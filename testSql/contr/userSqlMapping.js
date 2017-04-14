var user = {
	update:'update appoint set start_time = ? , end_time = ? , date_time = ? where s_id= ? and t_id = ? and tag_id = ? and course_id = ?',
	queryAll: 'select * from appoint',
	queryByUser: 'select id from user where user_name = ?',
	queryByTeacher: 'select id from teacher where user_name = ?',
	//insert:'INSERT INTO user(id, name, age) VALUES(0,?,?)',
	//delete: 'delete from user where id=?',
};

module.exports = user;