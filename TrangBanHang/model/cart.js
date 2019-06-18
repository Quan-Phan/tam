var connect=require('../dbs/index');

module.exports={

    list:()=>{
        var sql="SELECT * FROM cart";
        return connect.load(sql);
    },
    // findByOffset:(id,limit,offset)=>{
    //     var sql=`SELECT * FROM comments WHERE idXe= ${id} LIMIT ${limit} OFFSET ${offset} `;
    //     return connect.load(sql);
    // },
    updateSL:(id,sl)=>{
        let sql="UPDATE cart SET soLuong='"+sl+"' WHERE idSanPham = '"+id+"'";
        return connect.load(sql);
    },
    insert:(idSP)=>{
        // var sql = `insert into ${tableName} set ?`;
        var sql="INSERT INTO cart (idSanPham,soLuong) VALUES ('"+idSP+"','"+1+"')";
        return connect.load(sql);
    },
    delete:(id)=>{
        var sql="DELETE FROM cart WHERE id= '"+id+"'";
        return connect.load(sql);
    },
    deleteAll:()=>{
        var sql="DELETE FROM cart WHERE 1";
        return connect.load(sql);
    }
};