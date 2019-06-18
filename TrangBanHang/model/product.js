var connect_database=require('../dbs/index');

module.exports = {
    list: () => {
        var queryContent = `SELECT * FROM products`;
        return connect_database.load(queryContent);
    },
    listHang: (idNhaSX) => {
        var queryContent = `SELECT * FROM products WHERE idNhaSX=${idNhaSX}`;
        return connect_database.load(queryContent);
    },
    itemTen: (ten) => {
        var queryContent = "SELECT * FROM products WHERE ten= '"+ten+"'";
        return connect_database.load(queryContent);
    },
    findByOffset:(limit,offset)=>{
        var query=`SELECT * FROM products LIMIT ${limit} OFFSET ${offset} `;
        return connect_database.load(query);
    },
    findByOffsetGia:(gia,limit,offset)=>{
        var query=`SELECT * FROM products WHERE giaban<${gia} LIMIT ${limit} OFFSET ${offset} `;
        return connect_database.load(query);
    },
    findByOffsetIdNhaSX:(idNhaSX,limit,offset)=>{
        var query=`SELECT * FROM products WHERE idNhaSX=${idNhaSX} LIMIT ${limit} OFFSET ${offset} `;
        return connect_database.load(query);
    },
    findByOffsetIdNhaSXGia:(idNhaSX,gia,limit,offset)=>{
        var query=`SELECT * FROM products WHERE idNhaSX=${idNhaSX} AND giaban<${gia} LIMIT ${limit} OFFSET ${offset} `;
        return connect_database.load(query);
    },
    detail_product:(id)=>{
        var query="SELECT * FROM products WHERE id= '" +id+"'";
        return connect_database.load(query);
    },
    listImg:(id)=>{
        var query="SELECT * FROM imgproduct WHERE idSanPham = '"+id+"'";
        return connect_database.load(query);
    }
};

