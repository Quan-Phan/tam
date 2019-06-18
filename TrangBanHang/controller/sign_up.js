var member=require('../model/member');
var bcrypt=require('bcrypt');
const nodemailer=require('nodemailer');


exports.sign_upPage =function (req,res) {
    const user=req.user;
    const signOut="Log out";
    let email=req.query.Email;
    const thongBaoMXN="abc";
    if(email!=undefined){
        console.log(email);
        const output=`
            <h1 style="color: red">Car-Online</h1>
            <hr>
            <p>Xin chào bạn, tôi là đại diện cho Car-Online để gửi mail cho bạn</p>
            <p>Mã xác nhận để kịch hoạt tài khoản của bạn là:</p>
            <input style="color: #2AB391;font-size: 20px;border: black 2px solid;width: 70px" value="123456">
            <p>Xin cảm ơn !</p>
            `;
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'caronlinecenter@gmail.com', // generated ethereal user
                pass: 'Caronline123' // generated ethereal password
            }
        });
        let  mailOptions={
            from: '"CarOnline_Center" <foo@example.com>', // sender address
            to: `${email}`, // list of receivers
            subject: 'Hello ', // Subject line
            text: 'Hello world', // plain text body
            html: output // html body
        };
        transporter.sendMail(mailOptions,function (err,result) {
            if(err){
                console.log("Lỗi mail");
            }
            else {
                console.log("mail sent: "+result.response);
            }
        });

    }
    res.render('sign_up',{user,signOut,thongBaoMXN})
};
exports.sign_up=function (req,res) {
    //res.render('login');
   // res.redirect('/');
    const user=req.user;
    const signOut="Log out";
    let ten=req.body.ten;
    let ten_dang_nhap=req.body.username;
    let mat_khau=req.body.password;
    let email=req.body.email;
    let link_anh=req.body.link_anh
    let MXN=req.body.MXN;

    const thongBaoMXN="Mã xác nhận không đúng, vui lòng đăng kí lại";
    if(MXN!=123456){
        res.render('sign_up',{user,signOut,thongBaoMXN});

        // res.render('sign_up',{user,signOut,thongBaoMXN});
    }
    else {
        console.log(ten + ten_dang_nhap + mat_khau + email + link_anh);
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(mat_khau, salt, function (err, hash) {
                member.insert(ten, email, link_anh, ten_dang_nhap, hash,mat_khau);
                res.redirect('/login');
            })
        })
    }
};
