
exports.thongke=function (req,res) {
    const user=req.user;
    if(user){
        res.render('ThongKe');
    }else {
        res.redirect('/')
    }

}