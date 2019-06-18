var member=require('../model/member');
var order=require('../model/order');
var bcrypt=require('bcrypt');

exports.my_profile=function (req,res) {

    const signOut="Log out";
    const user=req.user;
    let thongbao="abc";
    const data={};
    //let thongbao=req.query.thongbao;
    if(!user){
        res.redirect('/login');
    }
    console.log(thongbao);
    const orderList=order.listIdKH(user.id);
    orderList.then(row=>{
        data.list_order=row;
        res.render('my_profile',{data,user,signOut,thongbao});
    })

};
exports.my_profilePost=function (req,res) {
    let ten=req.body.ten;
    let email=req.body.email;
    let link_anh=req.body.link_anh;

    console.log(ten);
    let matkhaucu=req.body.oldPass;
    let matkhaumoi=req.body.newPass;
    console.log(matkhaucu);
    const signOut="Log out";
    let thongbao;
    const user=req.user;
    if(ten!= undefined){
        console.log(ten);
        member.update(ten,email,link_anh,user.id);
        res.redirect('/my_profile');
    }
    else {
        const data={};
        const people = member.getID(user.id);
        people.then(row => {
            bcrypt.compare(matkhaucu, row[0].mat_khau, function (err, rs) {
                if (rs == false) {
                    thongbao="Mật khẩu cũ không chính xác";
                    //res.redirect('/');
                    const orderList=order.listIdKH(user.id);
                    orderList.then(row1=>{
                        data.list_order=row1;
                        res.render('my_profile',{data,user,signOut,thongbao});
                    })
                }
                else {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(matkhaumoi, salt, function (err, hash) {
                            member.updateMK(user.id, hash,matkhaumoi);
                            res.redirect('/logout');
                        })
                    })
                }
            })

        })
    }
};