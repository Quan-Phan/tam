// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartDay);
google.charts.setOnLoadCallback(drawChartWeek);
google.charts.setOnLoadCallback(drawChartMonth);
google.charts.setOnLoadCallback(drawChartBestSeller);

// Draw the chart and set the chart values
function drawChartDay() {
  var data = google.visualization.arrayToDataTable([
  ['Task', '$ per month '],
  ['Buggati Veyron', 5200000],
  ['Ferrari 418GTB', 1800000],
  ['Ferrari F12 Berlinetta', 2000000],
  ['Buggati Divo', 3000000],
  ['Buggati Chiron', 3200000],
]);

  // Optional; add a title and set the width and height of the chart  
  var options = {'title':'Doanh thu', 'width':400, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechartDay'));
  chart.draw(data, options);
}
function drawChartWeek() {
  var data = google.visualization.arrayToDataTable([
  ['Task', '$ per month '],
  ['Buggati Veyron', 5200000],
  ['Ferrari 418GTB', 1800000],
  ['Ferrari F12 Berlinetta', 2000000],
  ['Buggati Divo', 3000000],
  ['Buggati Chiron', 3200000],
]);

  // Optional; add a title and set the width and height of the chart  
  var options = {'title':'Doanh thu', 'width':400, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechartWeek'));
  chart.draw(data, options);
}
function drawChartMonth() {
  var data = google.visualization.arrayToDataTable([
  ['Task', '$ per month '],
  ['Buggati Veyron', 5200000],
  ['Ferrari 418GTB', 1800000],
  ['Ferrari F12 Berlinetta', 2000000],
  ['Buggati Divo', 3000000],
  ['Buggati Chiron', 3200000],
]);

  // Optional; add a title and set the width and height of the chart  
  var options = {'title':'Doanh thu', 'width':400, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechartMonth'));
  chart.draw(data, options);
}
function drawChartBestSeller() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'số lượng '],
  ['Buggati Veyron', 5],
  ['Ferrari 418GTB', 10],
  ['Ferrari Berlinetta', 3],
  ['Buggati Divo', 4],
  ['Buggati Chiron', 2],
  ['Lamborghini Aventador ', 7],
   [' Lamborghini Reventon', 11],
  ['Lamborghini Countach ', 3],
  ['Lamborghini Veneno  ', 14],
  ['Lamborghini Sesto Elemento', 2],
  ['Lamborghini Murcielago ', 3],
]);

  // Optional; add a title and set the width and height of the chart  
  var options = {'title':'Top bán chạy', 'width':600, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.BarChart(document.getElementById('barchartBestSeller'));
  chart.draw(data, options);
}