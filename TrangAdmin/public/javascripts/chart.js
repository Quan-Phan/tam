// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartBestSeller);


// Draw the chart and set the chart values

var dayOfdrawDay=null;
$(document).ready(function () {
  $("#dateDay").mouseleave(function(){
    google.charts.setOnLoadCallback(drawChartDay);

    var getDay = document.getElementById("dateDay").value;
    console.log(getDay);
   dayOfdrawDay=getDay;
  });
});

var mangTamDay=[];
var mangSD=[];
var mangID=[];
function drawChartDay() {

console.log(dayOfdrawDay);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      mangTamDay.push(['Task', '$']);
      var obj = JSON.parse(this.responseText);
      var i=0;

      for(i;i<obj.length;i++)
      {
        mangTamDay.push([obj[i].tenSpDaMua, parseFloat(obj[i].thanhtoan)]);
        mangSD.push(obj[i].tenSpDaMua);
        mangID.push(parseInt(obj[i].thanhtoan));
      }
      console.log(mangSD);
    }
  };
  xhttp.open("GET", "/ajaxChartDay?value="+dayOfdrawDay, true);
  xhttp.send();

  var ctx = document.getElementById("piechartDay").getContext('2d');
  var piechartDay = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: mangSD,
      datasets: [{
        label: 'loại xe',
        data: mangID,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        /*yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]*/
      }
    }
  });

}

var dayOfdrawMonth=null;
$(document).ready(function () {
  $("#month").mouseleave(function(){
    google.charts.setOnLoadCallback(drawChartMonth);
    var getDay = document.getElementById("month").value;
    console.log(getDay);
    dayOfdrawMonth=getDay;
  });
});

var mangTamThang=[];
var mangST=[];
var mangIT=[];

function drawChartMonth() {
  var temp1 = dayOfdrawMonth.split("-");
  var so1 = parseInt(temp1[1])-1;
  var so2 = parseInt(temp1[1])+1;
  var ngay1 = temp1[0]+'-'+so1+'-30';
  var ngay2 = temp1[0]+'-'+so2+'-1';
  console.log(ngay1);
  console.log(ngay2);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      var i=0;

      for(i;i<obj.length;i++)
      {
        mangTamThang.push([obj[i].tenSpDaMua, parseFloat(obj[i].thanhtoan)]);
        mangST.push(obj[i].tenSpDaMua);
        mangIT.push(parseInt(obj[i].thanhtoan));
      }
     // console.log(mangSD);
    }
  };
  xhttp.open("GET", "/ajaxChartThang?value1="+ngay1, true);
  xhttp.send();

  var ctx = document.getElementById("piechartMonth").getContext('2d');
  var piechartMonth = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: mangST,
      datasets: [{
        label: 'loại xe',
        data: mangIT,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        /*yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]*/
      }
    }
  });
}
function drawChartBestSeller() {
  var mangTam = [];
  var mangS=[];
  var mangI=[];
 /* mangTam.push(['Task', 'số lượng ']);*/
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj = JSON.parse(this.responseText);
        var i=0;

        for(i;i<obj.length;i++)
        {
            mangTam.push([obj[i].tenSpDaMua, parseFloat(obj[i].SL)]);
            mangS.push(obj[i].tenSpDaMua);
            mangI.push(parseInt(obj[i].SL));
        }
    }
  };
  xhttp.open("GET", "/ajaxChart", true);
  xhttp.send();


  var ctx = document.getElementById("barchartBestSeller").getContext('2d');
  var barchartBestSeller = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: mangS,
      datasets: [{
        label: 'loại xe',
        data: mangI,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}