var connect=require('../dbs/index');

module.exports={

    insert:(ten,idKH,diachi,ngaydathang,thanhtoan,trangthai)=>{
        // var sql = `insert into ${tableName} set ?`;
        //1: đang giao
        var sql="INSERT INTO orders (tenkhachhang,idKH,diachi,ngaydathang,thanhtoan,trangthai) VALUES ('"+ten+"','"+idKH+"','"+diachi+"','"+ngaydathang+"','"+thanhtoan+"','"+trangthai+"')";
        return connect.load(sql);
    },
    listIdKH:(idKH)=>{
        var sql="SELECT * FROM orders WHERE idKH='"+idKH+"'";
        return connect.load(sql);
    }
};