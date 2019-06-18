var car=require('../model/cart');
var pro=require('../model/product');
var order=require('../model/order');

module.exports={
    verifyGet: (req,res)=>{
        const data={};
        const signOut="Log out";
        const user=req.user;
        if(!user){
            res.redirect('/login');
        }
        const listCart=car.list();
        listCart.then(row=>{
            data.user=user;
            data.list_cart=row;
            const listPro=pro.list();
            listPro.then(row1=>{
                let sum=0;
                for(let i=0;i<row1.length;i++){
                    for(let j=0;j<data.list_cart.length;j++){
                        if(data.list_cart[j].idSanPham == row1[i].id){
                            sum=sum+row1[i].giaban*data.list_cart[j].soLuong;
                        }
                    }
                }
                data.sum=sum;
                res.render('payment',{data,user,signOut});
            })

        })
    },
    verifyPost:(req,res)=>{
        const data={};
        let diaChi=req.body.diaChi;
        let date=req.body.ngayDatHang;
        const user=req.user;
        if(!user){
            res.redirect('/login');
        }
        const listCart=car.list();
        listCart.then(row=>{
            //data.user=user;
            data.list_cart=row;
            const listPro=pro.list();
            listPro.then(row1=>{
                let sum=0;
                for(let i=0;i<row1.length;i++){
                    for(let j=0;j<data.list_cart.length;j++){
                        if(data.list_cart[j].idSanPham == row1[i].id){
                            sum=sum+row1[i].giaban*data.list_cart[j].soLuong;
                        }
                    }
                }

                order.insert(user.ten,user.id,diaChi,date,sum,"Đang giao");
                car.deleteAll();
                res.redirect('/');
            })

        })
    }
};
