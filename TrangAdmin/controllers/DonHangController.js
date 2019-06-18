var bill=require('../models/DonHangModel');
var bill1 =require('../models/SanPhamModel')

exports.donhang =function (req,res) {
   const data={};
	var subPoster = bill.listbill();
	subPoster.then(rowsl=>{
		data.listbill=rowsl;
		res.render('DonHang/DonHang',{title: 'Danh sách đơn hàng',data});
	});
};
exports.donhangbieudo=function (req,res) {
	var data={};
	var subPoster = bill.listIdSp();
	subPoster.then(rowsl=>{
		res.json(rowsl);
	});
};
