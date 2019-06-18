var connect_database=require('../dbs/connect_database');

module.exports={
	listMember:()=>{
		var query ="SELECT * FROM member";
		return connect_database.load(query);
		for(let i=0;i<data.listMember.length;i++)
		        {
		            if(data.listMember[i].ten_dang_nhap == username)
                    {console.log(data.listMember[i]);
                        bcrypt.compare(pass,data.listMember[i].mat_khau,function(err,rest){
							console.log(data.listMember[i]);
							//return res.redirect('/TaiKhoan');
                            if(rest)
                            {
                                return res.redirect('/TaiKhoan');
                            }
                            else{
                                return res.render('DangNhap');
                            }
                        });
                    }
		            else {
		                return res.render('DangNhap');
                    }
		
   				 }
	}
};