//Get all item
var product =require('../model/product');
var producers =require('../model/producers');


module.exports={
    list_product:(req,res) => {
        const data = {};
        const user=req.user;
        const signOut="Log out";
        let page = req.params.page;
        let idNhaSX=req.params.idNhaSX; // params để lấy trên link
        let gia=req.query.selectCost;
        let serach=req.query.textSearch;//để lấy ? trên link
        console.log(serach);
        //.body để lấy trong body
        //console.log(gia);
        // page=parseInt(page);
        if (!page) {
            page = 1;
        }
      //  const pageStart =page;
      //  console.log(page);
        const limit = 6;
        const offset = (page - 1) * limit ;
        if(serach==undefined){
            if(idNhaSX==0){
                if(gia==undefined){
                    let tem=product.findByOffset(limit,offset);
                    tem.then(row2=>{
                        data.list_product=row2;
                        console.log(data.list_product.length);
                        res.render('list_products',{title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX,gia})
                    })
                }
                else {
                    let tem=product.findByOffsetGia(gia,limit+3,offset);
                    tem.then(row2=>{
                        data.list_product=row2;
                        console.log(data.list_product.length);
                        res.render('list_products',{title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX,gia})
                    })

                }

            }
            else {
                if(gia==undefined){
                    console.log(gia);
                    let subPoster = product.findByOffsetIdNhaSX(idNhaSX,limit, offset);
                    subPoster.then(rows1 => {
                        data.list_product = rows1;
                        //console.log(data.list_product);
                        res.render('list_products', {title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX,gia});
                    });
                }
                else {
                    console.log("2dk "+gia);
                    let subPoster = product.findByOffsetIdNhaSXGia(idNhaSX,gia,limit+3, offset);
                    subPoster.then(rows1 => {
                        data.list_product = rows1;
                        //console.log(data.list_product);
                        res.render('list_products', {title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX,gia});
                    });
                }
            }
        }else {
            let listProducer=producers.list();
            listProducer.then(list=>{
                let idNhaSX=0;
                for (let i=0;i<list.length;i++){
                  if(list[i].name==serach){
                      idNhaSX=list[i].id;
                      break;
                  }
                }
                if(idNhaSX==0){
                    let listPro=product.itemTen(serach);
                    listPro.then(list1=>{

                        data.list_product=list1;
                        console.log(data.list_product);
                        res.render('list_products', {title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX,gia});
                    })
                }
                console.log(idNhaSX);
                let listProduct=product.listHang(idNhaSX);
                listProduct.then(list2=>{
                    data.list_product=list2;
                    res.render('list_products', {title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX,gia});
                })
            })
        }


    }
};


