var member=require('../model/member');
var nodemailer=require('nodemailer');
var bcrypt=require('bcrypt');

module.exports={

    takePassGet:(req,res)=>{
        const user=req.user;
        const signOut="Log out";

        res.render('take_pass_again',{user,signOut});
    },
    takePassPost:(req,res)=>{
        let email=req.body.email;
        let ten=req.body.username;


        console.log(email);
        let item=member.get(ten);
        item.then(row=>{

            let matkhau=row[0].mat_khau_chua_hash;
            const output=`
            <h1 style="color: red">Car-Online</h1>
            <hr>
            <p>Xin chào bạn, tôi là đại diện cho Car-Online để gửi mail cho bạn</p>
            <p>Bạn vừa lấy mật khẩu thành công</p>
            <p>Mật khẩu của bạn nằm ở tiêu đề của mail.</p>
            <p>Cảm ơn bạn đã luôn đồng hành cùng chúng tôi</p>
            <hr>
            <p style="color: #2AB391;font-size: 18px"> Bạn vui lòng quay lại trang web để tiếp tục đăng nhập.</p>
            <p>Xin cảm ơn</p>
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
                subject: `${matkhau}`, // Subject line
                text: 'Hello', // plain text body
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
            res.redirect('/login');
        })


    }



};