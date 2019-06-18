
var connect_database=require('../dbs/connect_database');

module.exports={
	listProducer:()=>{
		var query="SELECT * FROM producers";
		return connect_database.load(query);
	},
	listCat:()=>{
		var query="SELECT * FROM categories";
		return connect_database.load(query);
	},
	themNhaSX:(name)=>{
		var query ="INSERT INTO producers (name,checkdelete) VALUES ('"+name+"','"+0+"')";
     	return connect_database.load(query);
	},
	xoaNhaSX:(id)=>{
		var query =" UPDATE `producers` SET `checkdelete`=1 WHERE id='"+id+"'";
        return connect_database.load(query);
	},
	suaNhaSXPage:(id)=>{
		var query ="SELECT * FROM producers WHERE id = '"+id+"'";
        return connect_database.load(query);
	},
	suaNhaSX:(id,name)=>{
		var query ="UPDATE `producers` SET `name`='"+name+"' WHERE id='"+id+"'";
        return connect_database.load(query);
	},
	themLoaiSP:(name)=>{
		var query ="INSERT INTO categories (name,checkdelete) VALUES ('"+name+"','"+0+"')";
        return connect_database.load(query);
	},
	listCatEdit:(id)=>{
		var query="SELECT * FROM categories WHERE id = '"+id+"'";
		return connect_database.load(query);
	},
	suaLoaiSP:(id,name)=>{
		var query="UPDATE `categories` SET `name`='"+name+"' WHERE id='"+id+"'";
		return connect_database.load(query);
	},
	xoaLoai:(id)=>{
		var query="UPDATE `categories` SET `checkdelete`=1 WHERE id='"+id+"'";
		return connect_database.load(query);
	}
};