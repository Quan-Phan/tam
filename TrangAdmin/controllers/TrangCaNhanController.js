var personalInf  = require('../models/TrangCaNhanModel');
var bcrypt=require('bcrypt');
exports.trangcanhan=function (req,res) {
    const user = req.user;
    if(!user){
        return res.redirect('/');
    }
    res.render('TrangCaNhan/TrangCaNhan',{user});
};
exports.suaTrangCaNhan=function (req,res) {
    let ten = req.body.ten;
    let email = req.body.email;
    let linkanh = req.body.nameLink;

    let mkcu = req.body.txtOldPass;
    let mkmoi = req.body.txtNewPass;
    const user = req.user;
    const signOut= "Log out";
    console.log(mkcu);
    if(mkcu== undefined){
        personalInf.updateProfile(user.id,ten,email,linkanh);
        return res.redirect('/TrangCaNhan');
    }
    else if(mkcu!=undefined){
        console.log("abc");
        const mem = personalInf.listMembyID(user.id);
        mem.then(row=>{
           bcrypt.compare(mkcu,row[0].mat_khau,function (err,rlt) {
               if(rlt==false){
                   //return res.render('TrangCaNhan/TrangCaNhan',{message:"Mật khẩu cũ không chính xác",user,signOut});
                   return res.render('TrangCaNhan/TrangCaNhan',{signOut});
               }
               bcrypt.genSalt(10,function (err,salt) {
                   bcrypt.hash(mkmoi,salt,function (err,hash) {
                       personalInf.updatePass(user.id,hash,mkmoi);
                       return res.redirect('/TrangCaNhan');
                   })
               })
           })
        })
    }

}
