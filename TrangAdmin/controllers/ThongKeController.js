var thongKe = require('../models/ThongKeModel');
exports.thongke=function (req,res) {
    res.render('ThongKe');
};
exports.thongkengay=function (req,res) {
    let ngay=req.query.value;
    console.log(ngay);
    var subPoster = thongKe.ngay(ngay);
    subPoster.then(rowsl=>{
        console.log(rowsl);
        res.json(rowsl);
    })
};
exports.thongkethang=function (req,res) {
    let ngay1=req.query.value1;

    var temp1 = ngay1.split("-");
    var so1 = parseInt(temp1[1])+2;
    var ngay2 = temp1[0]+'-'+so1+'-1';

    var subPoster = thongKe.thang(ngay1,ngay2);
    subPoster.then(rowsl=>{
        res.json(rowsl);
    })
};