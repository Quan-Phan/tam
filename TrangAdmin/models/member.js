var connect_database =require('../dbs/connect_database');
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
    listMemByUser:(tdn)=>{
        let query="SELECT * FROM member WHERE ten_dang_nhap= '" +tdn+"'";
        return connect_database.load(query);
    },
    addLink:(id,img)=>{
        let query = "INSERT INTO imgproduct (idSanPham, link_anh) VALUES ('"+id+"','"+img+"')";
        return connect_database.load(query);
    },
    imgOfProduct:(id)=>{
        let query = "SELECT link_anh FROM imgproduct WHERE idSanPham='"+id+"'";
        return connect_database.load(query);
    }
};