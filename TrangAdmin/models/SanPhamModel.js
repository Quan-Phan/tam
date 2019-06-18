
var connect_database=require('../dbs/connect_database');

module.exports={
	listProducer:()=>{
		var query= "SELECT * FROM producers";
		return connect_database.load(query);
	},
	listProduct:()=>{
		var query = "SELECT * FROM products";
		return connect_database.load(query);
	},
	themSanPhamPage:()=>{
		var query = "SELECT * FROM categories";
		return connect_database.load(query);
	},
	themSanPham:(req,res)=>{
		let filepathanh = req.body.txtFilePathAnh;
         let giaban = parseFloat(req.body.txtGiaBan);
         let mota = req.body.txtMoTa;
         let soluonghienco = parseInt(req.body.txtSoLuongHienCo);
         let ten = req.body.txtTen;
         let xuatxu = req.body.txtXuatXu;
         let idLoai = req.body.txtIdLoai;
         let idNhaSX = parseInt(req.body.txtIdNhaSX);

         let query ="INSERT INTO products (ten,giaban,filepathanh,soluonghienco,xuatxu,mota,idLoai,idNhaSX) VALUES ('"+ten+"','"+giaban+"','"+filepathanh+"','"+soluonghienco+"','"+xuatxu+"','"+mota+"','"+idLoai+"','"+idNhaSX+"')";
        
		return connect_database.load(query);
	},
	xoaSanPham:(id)=>{		 
        let query ="DELETE FROM products WHERE id = '"+id+"'";
        return connect_database.load(query); 
	},
	suaSanPhamPage:(id)=>{
          var query = "SELECT * FROM products WHERE id = '"+id+"'";
		 return connect_database.load(query);
	},
	suaSanPham:(id,res,req)=>{
        let filepathanh = req.body.txtFilePathAnh;
        let giaban = parseFloat(req.body.txtGiaBan);
        let mota = req.body.txtMoTa;
        let soluonghienco = parseInt(req.body.txtSoLuongHienCo);
        let ten = req.body.txtTen;
        let xuatxu = req.body.txtXuatXu;
        let idLoai = req.body.txtIdLoai;
        let idNhaSX = parseInt(req.body.txtIdNhaSX);
        console.log(ten);

        var query = "UPDATE `products` SET `filepathanh` = '" + filepathanh + "', `giaban` = '" + giaban + "', `mota` = '" + mota + "', `soluonghienco` = '" + soluonghienco + "', `ten` = '" + ten + "', `xuatxu` = '" + xuatxu + "', `idLoai` = '" + idLoai + "', `idNhaSX` = '" + idNhaSX + "' WHERE `id` = '" + id + "'";
        return connect_database.load(query);
	}

	
};