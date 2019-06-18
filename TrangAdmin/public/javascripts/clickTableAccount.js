
$(document).ready(function(){
	$("#tableAccountKH tbody tr").click(function(){
		var tableData =$(this).children("td").map(function(){
			return $(this).text();
		}).get();
		var td=tableData[2];
	    var formInf = document.getElementById("exampleModalInfAccount");
		formInf.style.display="block";

		var anh = document.getElementById("imgInf");
		var ms = document.getElementById("idInf");
		var ten = document.getElementById("nameInf");
		var email = document.getElementById("emailInf");
		var tdn = document.getElementById("userInf");

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				/*anh.src=this.responseText.link_anh;*/
				var obj=JSON.parse(this.responseText);
				anh.src=obj[0].link_anh;
				ms.value=obj[0].id;
				ten.value=obj[0].ten;
				email.value=obj[0].email;
				tdn.value=obj[0].ten_dang_nhap;
			}
		};
		xhttp.open("GET", "/ajax?value="+td, true);
		xhttp.send();






	});
});
function closeModalInfAccount()
{
	var formInf = document.getElementById("exampleModalInfAccount");
	formInf.style.display="none";
}