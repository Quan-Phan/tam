var connect=require('../dbs/index');

module.exports={

    list:(id)=>{
        var sql="SELECT * FROM comments WHERE idXe= '"+id+"'";
        return connect.load(sql);
    },
    findByOffset:(id,limit,offset)=>{
        var sql=`SELECT * FROM comments WHERE idXe= ${id} LIMIT ${limit} OFFSET ${offset} `;
        return connect.load(sql);
    },
    insert:(ten,noidung,idXe)=>{
       // var sql = `insert into ${tableName} set ?`;
        var sql="INSERT INTO comments (tenNguoiBL,noiDungBL,idXe) VALUES ('"+ten+"','"+noidung+"','"+idXe+"')";
        return connect.load(sql);
    }
};