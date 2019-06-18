var nodemailer=require('nodemailer');

//let transporter = nodemailer.createTransport('smtps://caronlinecenter%40gmail.com:Caronline123@smtp.gmail.com');
let email="hau.pham.270698@gmail.com";
const output=`
<h4 style="color: red">MÈO IU ƠI</h4>
<p style="color: #2AB391">Mèo iu đi lễ về ròi hả, mèo có mệt nhẹ hk, đói bụng hk, đói thì ăn anh nè, meo meo</p>
<p style="color: #2AB391">Mèo iu có rãnh hk, nhớ a hk, nhớ thì bấm vào link dưới xem nhẹ nha, iu iu mèo</p>
<a href="https://drive.google.com/drive/u/0/folders/1-5QeaQG5zurYHuF_Y4Y7EwlHP_6REBMf"> Yêu Thương</a>
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