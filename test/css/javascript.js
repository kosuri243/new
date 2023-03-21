google.charts.load('current', {'packages':['corechart']});
                    google.charts.setOnLoadCallback(drawChart);
              
                    function drawChart() {
                      var data = google.visualization.arrayToDataTable([
                        ['Year', 'Sales'],
                        ['2010',  13894163],
                        ['2011',  15710758],
                        ['2012',  16854413],
                        ['2013',  16723019],
                        ['2014',  17972595],
                        ['2015',  17686790],
                        ['2016',  17910320],
                        ['2017',  18448033],
                        ['2018',  20351620],
                        ['2019',  21018395],
                        ['2020',  18952091],
                      ]);
              
                      var options = {
                        title: 'Sum of sales',
                        curveType: 'function',
                        legend: { position: 'bottom' }
                      };
              
                      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
              
                      chart.draw(data, options);
                    }