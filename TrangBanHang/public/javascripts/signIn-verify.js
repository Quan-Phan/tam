function verifyLogin(){
	var username = document.getElementById("txtUserName").value;
	var password = document.getElementById("txtPassWord").value;
	
	if(username==''){
		document.getElementById("noticeUsername").innerHTML="Tên tài khoản không được để trống!";
	}
	else{
		document.getElementById("noticeUsername").innerHTML="";
	}
	
	if(password==''){
		document.getElementById("noticePassword").innerHTML="Mật khẩu không được để trống!";
	}	   
	else{
		document.getElementById("noticePassword").innerHTML="";
	}
	
	return false;
}