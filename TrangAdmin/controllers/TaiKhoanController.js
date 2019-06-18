var account =require('../models/TaiKhoanModel');
var member=require('../models/member');

exports.taikhoan=function(req,res){

	const user=req.user;
	if(user){
		const data={};
		let id=req.query.id;
		if(id!=undefined){
			let member1=member.getID(id);
			member1.then(row=>{
				if(row[0].khoa==0){
					account.khoaTK(id);
					res.redirect('/TaiKhoan');
				}
				if(row[0].khoa==1){
					account.moTK(id);
					res.redirect('/TaiKhoan');
				}
			})
		}
		var subPoster=account.listAccount();
		subPoster.then(rowsl=>{
			data.listAccount=rowsl;
			res.render('index',{title: 'Danh sách tài khoản',data,user});
		})
	}else {
		res.redirect('/')
	}

};
exports.themTaiKhoan=function(req,res){
	account.themTaiKhoan(req,res);
	res.redirect('/TaiKhoan');
};