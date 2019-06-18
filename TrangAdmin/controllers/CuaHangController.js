
//var cuahang = require('../models/CuaHang');
var store=require('../models/CuaHangModel');

exports.listStore =function (req,res) {
	const data={};
	var subPoster = store.listStore();
	
	subPoster.then(rowsl=>{
		data.listStore=rowsl;
		console.log(data);
		res.render('CuaHang/index',{title: 'Danh sách cửa hàng',data});
	});
};
exports.themCuaHang=function (req,res) {
	store.addCH(req,res);
	res.redirect('/CuaHang');
};
exports.suaCuaHang=function (req,res) {
	const data={};
	let id=req.params.id;
	var subPoster = store.editCH(id);
	subPoster.then(rowsl=>{
		data.editCH=rowsl;
		res.render('CuaHang/SuaCuaHang',{data});
	})
};
exports.suaCuaHangPost=function (req,res) {
	let id=req.params.id;
	store.editCHPost(id,req,res);
	res.redirect('/CuaHang');
};
exports.xoaCH=function (req,res) {
	let id=req.params.id;
	store.xoaCH(id);
	res.redirect('/CuaHang');
};
