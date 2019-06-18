function verifyChangePassAdmin(){
	var newPass = document.getElementById("txtNewPass").value;
	var retypeNewPass = document.getElementById("txtRetypeNewPass").value;


		if(retypeNewPass==newPass || newPass=='')
		{
			document.getElementById("noticeRetypeNewPass").innerHTML="";
		}
		else{
			document.getElementById("noticeRetypeNewPass").innerHTML="Mật khẩu nhập lại không khớp!";
			document.getElementById("noticeRetypeNewPass").style.color="red";
		}

}
/*
function noticeWrongPass() {
	var notice = document.getElementById("inputtest").value;
	if(notice=="Log out")
	{
		alert("Mật khẩu cũ sai, mời nhập lại!");
	}
}*/
