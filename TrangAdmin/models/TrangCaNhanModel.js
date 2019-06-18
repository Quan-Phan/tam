var connect_database =require('../dbs/connect_database');

module.exports= {
   updateProfile:(id,ten,email,linkanh)=>{
       let query="UPDATE member SET ten = '"+ten+"', email='"+email+"', link_anh='"+linkanh+"' WHERE id='"+id+"'";
       return connect_database.load(query);
   },
    listMembyID:(id)=>{
       let query = "SELECT * FROM member WHERE id = '"+id+"'";
       return connect_database.load(query);
    },
    updatePass:(id,pass)=>{
       let query="UPDATE member SET mat_khau = '"+pass+"' WHERE id='"+id+"'";
        return connect_database.load(query);
    }

};