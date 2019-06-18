
var connect_database=require('../dbs/connect_database');

module.exports={
	listbill:()=>{
		var query="SELECT * FROM orders";
		return connect_database.load(query);
	},
	update:(maDH,trangTHai)=>{
		var sql="UPDATE orders SET trangthai='"+trangTHai+"' WHERE id='"+maDH+"'";
		return connect_database.load(sql);
	}
};