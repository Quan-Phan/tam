
var product =require('../model/product');
var comment=require('../model/comment');

module.exports= {
    detail_product: (req, res) => {
        let id=req.params.id;
        let pageBL=req.params.pageBL;
        const data={};
        const user=req.user;
        const signOut="Log out";
        let subPoster = product.detail_product(id);
        subPoster.then(rows1 =>{
            data.list_product=rows1;
            let comments=comment.findByOffset(id,2,(pageBL-1)*2);
            if(comments){
                comments.then(row=>{
                    data.list_comment=row;
                    console.log(data.list_comment);
                    let listPro=product.listHang(data.list_product[0].idNhaSX);
                    listPro.then(row2=>{
                        data.dsLienQuan=row2;

                        let listImg=product.listImg(id);
                        listImg.then(row3=>{
                            data.list_Img=row3;
                            res.render('detail_product',{title: 'Danh sách sản phẩm',data,user,signOut});
                        })

                    })
                });
            }
            // console.log(data.list_product);
           // res.render('detail_product',{title: 'Chi tiết sản phẩm',data});
        });
    },
    detail_productPost:(req,res)=>{
        let noiDungBinhLuan=req.body.noiDungBL;
        console.log(noiDungBinhLuan);
        const user=req.user;
        if(!user){
            res.redirect('/login');
        }
        console.log(user.ten_dang_nhap);
        let id=req.params.id;
        console.log(id);
        if(noiDungBinhLuan){
            comment.insert(user.ten_dang_nhap,noiDungBinhLuan,id);
        }
        res.redirect(`/detail_product/${id}/1`);
    }
};