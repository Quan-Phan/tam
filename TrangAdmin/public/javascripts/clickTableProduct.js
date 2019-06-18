var td = null;
var arr=null;
var data=new Array();
var idTemp=null;
$(document).ready(function(){
	$("#tableSP tbody tr").dblclick(function(){
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
	location.reload(true);
};
$(document).ready(function(){

	$("#btnAddImg").click(function(){

		$(".form-groupAdd").append("<input class=\"linkImg\" placeholder=\"Nhập link ảnh\">");
	});


});

$(document).ready(function () {
	$("#tableSP tbody tr").mouseenter(function () {
		var tableData =$(this).children("th").map(function(){
			return $(this).text();
		}).get();
		idTemp=tableData[0];

	});
	$(".btnShowDetail").click(function () {

		var obj=null;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				obj = JSON.parse(this.responseText);
				var temp = obj[0].link_anh;
				console.log(obj);
				$(".carousel-inner").append("<div class=\"carousel-item active\">\n" +
					"<img src=\""+temp+"\" class=\"d-block w-100\">\n" +
					"</div>");
				$(".carousel-indicators").append("<li data-target=\"#carouselExampleIndicators\" data-slide-to=\""+0+"\" class=\"active\"/>");
				var i=1;
				for(i;i<obj.length;i++)
				{
					var urlImg = obj[i].link_anh;
					$(".carousel-inner").append("<div class=\"carousel-item\">\n" +
						"<img src=\""+urlImg+"\" class=\"d-block w-100\">\n" +
						"</div>");
					$(".carousel-indicators").append("<li data-target=\"#carouselExampleIndicators\" data-slide-to=\""+i+"\"/>");
				}
			}
		};
		xhttp.open("GET", "/ajaxShowDetail?value1="+idTemp, true);
		xhttp.send();

	});
	$('#exampleModalShowDetail').on('hidden.bs.modal', function (e) {
		if ($(e.target).attr('data-refresh') == 'true') {
			// Remove modal data
			$(e.target).removeData('bs.modal');
			// Empty the HTML of modal
			$(e.target).html('');
		}
	});
})
