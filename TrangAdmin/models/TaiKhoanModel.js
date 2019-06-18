var connect_database=require('../dbs/connect_database');
var bcrypt=require('bcrypt');

module.exports={
	themTaiKhoan:(req,res)=>{
		var user = req.body.nameUsername;
		var pass = req.body.namePass;
		var name = req.body.nameName;
		var email = req.body.nameEmail;
		var linkavt = req.body.nameLink;
		var typeAcc = req.body.typeOfAcc;
		bcrypt.genSalt(10,function (error,salt) {
			bcrypt.hash(pass,salt,function (err,hash) {
				if(typeAcc=="QL"){
					sql ="INSERT INTO member(ten_dang_nhap,mat_khau,ten,email,link_anh,loai_tai_khoan,mat_khau_chua_hash) VALUES ('"+user+"','"+hash+"', N'"+name+"', '"+email+"', '"+linkavt+"', "+1+",'"+pass+"')";
				}
				else if(typeAcc=="KH"){
					sql ="INSERT INTO member(ten_dang_nhap,mat_khau,ten,email,link_anh,loai_tai_khoan,mat_khau_chua_hash) VALUES ('"+user+"','"+hash+"', N'"+name+"', '"+email+"', '"+linkavt+"', "+0+",'"+pass+"')";
				}
				return connect_database.load(sql);
					/*res.redirect('/TaiKhoan');*/
				});
			})
		},
	listAccount:()=>{
		var query="SELECT * FROM member";
		return connect_database.load(query);
	},
	khoaTK:(id)=>{
		let sql="UPDATE member SET khoa='"+1+"' WHERE id = '"+id+"'";
		return connect_database.load(sql);
	},
	moTK:(id)=>{
		let sql="UPDATE member SET khoa='"+0+"' WHERE id = '"+id+"'";
		return connect_database.load(sql);
	}
};