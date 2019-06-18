
var connect_database=require('../dbs/connect_database');

module.exports={
	listStore:()=>{
		var query="SELECT * FROM shops";
		return connect_database.load(query);
	},
	addCH:(req,res)=>{
		var dc = req.body.nameAddr;
		var nql = req.body.nameQL;
		var sdt = req.body.namePhone;

		console.log(dc);
		console.log(nql);
		console.log(sdt);

		var sql ="INSERT INTO shops(diachi,sodienthoai,quanly) VALUES (N'"+dc+"','"+sdt+"', N'"+nql+"')";
		return connect_database.load(sql);
	},
	editCH:(id)=>{
		var query = "SELECT * FROM shops WHERE id = '"+id+"'";
		return connect_database.load(query);
	},
	editCHPost:(id,req,res)=>{
		let dch = req.body.nameDC;
		let sdt = parseInt(req.body.nameSdt);
		let ten = req.body.nameQL;

var query = "UPDATE `shops` SET `diachi` = '" + dch + "', `sodienthoai` = '" + sdt + "', `quanly` = '"+ ten+"' WHERE `id` = '" + id + "'";
return connect_database.load(query);
	},
	xoaCH:(id)=>{
		let query ="DELETE FROM shops WHERE id = '"+id+"'";
		return connect_database.load(query);
	},
};