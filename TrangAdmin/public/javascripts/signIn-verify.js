function verifyLoginAdmin(){
	var username = document.getElementById("userNameAdmin").value;
	var password = document.getElementById("userPassAdmin").value;
	
	if(username==''){
		document.getElementById("noticeUserNameAdmin").innerHTML="Tên tài khoản không được để trống!";
	}
	else{
		document.getElementById("noticeUserNameAdmin").innerHTML="";
	}
	
	if(password==''){
		document.getElementById("noticePassAdmin").innerHTML="Mật khẩu không được để trống!";
	}	   
	else{
		document.getElementById("noticePassAdmin").innerHTML="";
	}	
}
function wrongPass(){
	var xhttp = new XMLHttpRequest();
		  xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			alert("abc");
			 if(this.responseText=="0"){
				document.getElementById("noticePassAdmin").innerHTML="Tên đăng nhập hoặc mật khẩu không đúng";			
			}
			}
		  };
	  xhttp.open("GET", "/DangNhap", true);
	  xhttp.send();
		  

}