var td = null;
var arr=null;
var data=new Array();
$(document).ready(function(){
	$("#tableSP tbody tr").click(function(){
		td=null;
		arr=null;
		data=new Array();
		var tableData =$(this).children("th").map(function(){
			return $(this).text();
		}).get();
		td=tableData[0];
	    var formInf = document.getElementById("exampleModalAddImage");
		formInf.style.display="block";


	});
	$("#btnGui").click(function(){
		arr = document.getElementById("divLinkImg").childNodes;
		var i=0;
		for(i;i<arr.length;i++)
		{
			if(i!=0 && i!=2) {
				data.push(arr[i].value);
			}
		}
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {

			}
		};
		xhttp.open("GET", "/ajaxProduct?value1="+td+"&value2="+data, true);
		xhttp.send();
	});
});

function closeModalAddProduct()
{
	var formInf = document.getElementById("exampleModalAddImage");
	formInf.style.display="none";
};
$(document).ready(function(){

	$("#btnAddImg").click(function(){

		$(".form-groupAdd").append("<input class=\"linkImg\" placeholder=\"Nhập link ảnh\">");
	});

});