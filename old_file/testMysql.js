var mysql   = require('mysql');
var pool  = mysql.createPool({
  host     : '172.16.0.20',
  user     : 'root',
  password : '123456',
  database : 'talk'
});

var t_id = 6951,s_id = 790108388,course_id = 575114;
pool.getConnection(function(err, connection) {
	connection.query("select * from appoint where t_id = ? and s_id = ? and course_id = ?" , [t_id,s_id,course_id], function selectTable(err, rows, fields){
	 connection.release();
	 if (err){
	  pool.end();
	  throw err;
	 }
	 if (rows){
	  for(var i = 0 ; i < rows.length ; i++){
	  	console.log(rows[i],rows[i].date_time,rows[i].start_time,rows[i].end_time)
	   //return {"date_time":rows[i].date_time,"start_time":rows[i].start_time,"end_time":rows[i].end_time};
	  }
	 }
	 pool.end();
	});
})


