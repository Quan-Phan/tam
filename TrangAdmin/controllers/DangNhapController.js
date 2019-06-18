var login =require('../models/DangNhapModel');
var bcrypt=require('bcrypt');

module.exports ={

    loginGet:(req,res)=>{
        res.render('DangNhap');
    },
    loginPost:(req,res)=>{
        var username=req.body.nameUser;
		var pass = req.body.namePass;
		var flag=0;
		const data={};
		var subPoster = login.listMember();
		subPoster.then(rowsl=>{
			data.listMember=rowsl;	
			for(let i=0;i<data.listMember.length;i++)
		        {
		            if(data.listMember[i].ten_dang_nhap == username)
                    {
						flag=1;
                        bcrypt.compare(pass,data.listMember[i].mat_khau,function(err,rest){
							//return res.redirect('/TaiKhoan');
                            if(rest==true)
                            {
                                return res.redirect('/TaiKhoan');
                            }
                            else{
                                return res.render('DangNhap');
                            }
                        });
                    }		           
                }
			if(flag==0)
				{
					return res.render('DangNhap');
				}		
   		})		
	}
};