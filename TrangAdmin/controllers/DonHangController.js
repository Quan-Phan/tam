var bill=require('../models/DonHangModel');

module.exports= {
	donhang: (req, res) => {
		const data = {};
		const user = req.user;
		if (user) {
			var subPoster = bill.listbill();
			subPoster.then(rowsl => {
				data.listbill = rowsl;
				res.render('DonHang/DonHang', {title: 'Danh sách đơn hàng', data});
			});
		} else {
			res.redirect('/');
		}
	},
	SuaDonHang:(req,res)=>{
		let MaDH=req.body.maDH;
		let TrangThai=req.body.trangthaiDH;
		bill.update(MaDH,TrangThai);
		res.redirect('/DonHang');
	}
};
