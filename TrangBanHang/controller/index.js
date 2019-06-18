var product=require('../model/product');
var producer=require('../model/producers');

exports.index=function (req,res) {
   const data={};
   const user=req.user;
   const signOut="Log out";
   let search=req.query.textSearch;
   var subPoster = product.list();
   subPoster.then(rows1 =>{
      data.list_product=rows1;
      var pro=producer.list();
      pro.then(row=>{
         data.list_producer=row;

         if(search!=undefined){
            let idNhaSX=0;
            for(let i=0;i<row.length;i++){
               if(row[i].name==search){
                  idNhaSX=row[i].id;
                  break;
               }
            }
            if(idNhaSX!=0) {
               res.redirect(`/list_products/${idNhaSX}/1`);
            }
            if(idNhaSX==0){
                  res.redirect(`/list_products/${idNhaSX}/1?textSearch=${search}`);
               }
            }
         res.render('index',{data,signOut,user});
      })
   });

};