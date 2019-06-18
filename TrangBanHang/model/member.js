var connect_database =require('../dbs/index');
var bcrypt=require('bcrypt');

module.exports= {
    list:()=>{
        let query="SELECT * FROM member";
        return connect_database.load(query);
    },
   get:(ten_dang_nhap)=>{
       let query="SELECT * FROM member WHERE ten_dang_nhap= '" +ten_dang_nhap+"'";
       return connect_database.load(query);
   },
    getID:(id)=>{
        let query="SELECT * FROM member WHERE id= '" +id+"'";
        return connect_database.load(query);
    },
    insert:(ten,email,link_anh,ten_dang_nhap,mat_khau,mat_khau_chua_hash)=>{
        var sql="INSERT INTO member (ten,email,link_anh,ten_dang_nhap,mat_khau,mat_khau_chua_hash) VALUES ('"+ten+"','"+email+"','"+link_anh+"','"+ten_dang_nhap+"','"+mat_khau+"','"+mat_khau_chua_hash+"')";
        return connect_database.load(sql);
    },
    update:(ten,email,link_anh,id)=>{
       var sql="UPDATE member set ten='"+ten+"',email='"+email+"',link_anh='"+link_anh+"' WHERE id='"+id+"'" ;
       return connect_database.load(sql);
    },
    updateMK:(id,mat_khau,mk)=>{
        var sql="UPDATE member set mat_khau='"+mat_khau+"',mat_khau_chua_hash='"+mk+"' WHERE id='"+id+"'" ;
        return connect_database.load(sql);
    }

};