var car=require('../model/cart');
var product=require('../model/product');
var producers=require('../model/producers');

module.exports={
    myCart: (req,res)=>{

        const user=req.user;
        const signOut="Log out";
        const data={};
        let search=req.query.textSearch;
        if(search!=undefined){
            let idNhaSX=0;
            const tam=producers.list();
            tam.then(row=>{
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
            })
        }
        let id=req.query.id;
        let soLuong=req.query.soLuong;
        if(id!=undefined){
            console.log(id);
            console.log(soLuong);
            car.updateSL(id,soLuong);
            res.redirect('/cart');
        }
        const list=car.list();
        list.then(row=>{

            data.list_cart=row;
            const pro=product.list();
            pro.then(row1=>{

                data.list_product=row1;
                res.render('cart',{data,signOut,user});
            })
        })
    },
};
