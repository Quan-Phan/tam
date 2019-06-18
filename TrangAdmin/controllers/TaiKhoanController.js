var account =require('../models/TaiKhoanModel');

exports.taikhoan=function(req,res){
	const data={};
	var subPoster=account.listAccount();
	subPoster.then(rowsl=>{
		data.listAccount=rowsl;
		res.render('index',{title: 'Danh sách tài khoản',data});
	})
};
exports.themTaiKhoan=function(req,res){
	account.themTaiKhoan(req,res);
	res.redirect('/TaiKhoan');
};