const getLabelNumbers = function (count) {
  const labels = [];
  for (let i = 1; i <= count; i++) {
    const label = i < 10 ? `0${i}` : i.toString();
    labels.push(label);
  }

  return labels;
};

const getCompleterData = function (datasetsData, maxValue) {
  const completerData = (new Array(datasetsData[0].length)).fill(maxValue);

  for (let i = 0; i < datasetsData.length; i++) {
    for (let j = 0; j < datasetsData[i].length; j++) {
      completerData[j] -= datasetsData[i][j];
    }
  }

  return completerData;
};

/*------------------------
    ENGAGEMENTS CHART
------------------------*/
app.querySelector('#engagements-chart', function (el) {
  const canvas = el[0],
        ctx = canvas.getContext('2d'),
        chartData = {
          datasets: [{
            data: [18.3, 5.2, 1.4, 3.9],
            backgroundColor: [
              '#615dfa',
              '#23d2e2',
              '#4f91ff',
              '#3ad2fe'
            ],
            hoverBackgroundColor: [
              '#615dfa',
              '#23d2e2',
              '#4f91ff',
              '#3ad2fe'
            ],
            borderWidth: 0
          }],
          labels: [
            'Reactions',
            'Comments',
            'Shares',
            'Replies'
          ]
        },
        chartOptions = {
          cutoutPercentage: 88,
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodyFontFamily: "'Titillium Web', sans-serif",
            callbacks: {
              label: function (tooltipItem, data) {
                const labelText = data.datasets[0].data[tooltipItem.index] + 'K';
  
                return labelText;
              }
            }
          }
        };
  
  app.plugins.createChart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
  });
});

/*-------------------------------------
    VE MONTHLY REPORT RATIO CHART
-------------------------------------*/
app.querySelector('#ve-monthly-report-ratio-chart', function (el) {
  const canvas = el[0],
        ctx = canvas.getContext('2d'),
        chartData = {
          datasets: [{
            data: [12.5, 87.5],
            backgroundColor: [
              '#615dfa',
              '#23d2e2'
            ],
            hoverBackgroundColor: [
              '#615dfa',
              '#23d2e2'
            ],
            borderWidth: 0
          }],
          labels: [
            'Engagements',
            'Visits'
          ]
        },
        chartOptions = {
          cutoutPercentage: 74,
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodyFontFamily: "'Titillium Web', sans-serif",
            callbacks: {
              label: function (tooltipItem, data) {
                const labelText = data.datasets[0].data[tooltipItem.index] + '%';
  
                return labelText;
              }
            }
          }
        };
  
  app.plugins.createChart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
  });
});

/*-------------------------------
    PROFILE COMPLETION CHART
-------------------------------*/
app.querySelector('#profile-completion-chart', function (el) {
  const canvas = el[0],
        ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 70, 140, 70);

  gradient.addColorStop(0, '#41efff');
  gradient.addColorStop(1, '#615dfa');

  const chartData = {
          datasets: [{
            data: [59, 41],
            backgroundColor: [
              gradient,
              '#e8e8ef'
            ],
            hoverBackgroundColor: [
              gradient,
              '#e8e8ef'
            ],
            borderWidth: 0
          }]
        },
        chartOptions = {
          cutoutPercentage: 88,
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          animation: {
            animateRotate: false
          }
        };

  app.plugins.createChart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
  });
});

/*-----------------------------
    POSTS ENGAGEMENT CHART
-----------------------------*/
app.querySelector('#posts-engagement-chart', function (el) {
  const canvas = el[0],
        ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 40, 80, 40);

  gradient.addColorStop(0, '#41efff');
  gradient.addColorStop(1, '#615dfa');

  const chartData = {
          datasets: [{
            data: [87, 13],
            backgroundColor: [
              gradient,
              '#e8e8ef'
            ],
            hoverBackgroundColor: [
              gradient,
              '#e8e8ef'
            ],
            borderWidth: 0
          }]
        },
        chartOptions = {
          cutoutPercentage: 85,
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          animation: {
            animateRotate: false
          }
        };

  app.plugins.createChart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
  });
});

/*-------------------------
    POSTS SHARED CHART
-------------------------*/
app.querySelector('#posts-shared-chart', function (el) {
  const canvas = el[0],
        ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 40, 80, 40);

  gradient.addColorStop(0, '#41efff');
  gradient.addColorStop(1, '#615dfa');

  const chartData = {
          datasets: [{
            data: [42, 58],
            backgroundColor: [
              gradient,
              '#e8e8ef'
            ],
            hoverBackgroundColor: [
              gradient,
              '#e8e8ef'
            ],
            borderWidth: 0
          }]
        },
        chartOptions = {
          cutoutPercentage: 85,
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          animation: {
            animateRotate: false
          }
        };

  app.plugins.createChart(ctx, {
    type: 'doughnut',
    data: chartData,
    options: chartOptions
  });
});

/*------------------------------
    VE MONTHLY REPORT CHART
------------------------------*/
app.querySelector('#ve-monthly-report-chart', function (el) {
  const datasetData1 = [20, 15, 22, 26, 12, 16, 24, 13, 17, 9, 26, 21, 14, 21, 17, 23, 30, 18, 24, 15, 28, 17, 13, 23, 16, 12, 23, 16, 24, 13, 22],
        datasetData2 = [9, 28, 6, 9, 17, 7, 16, 12, 10, 11, 12, 3, 13, 11, 8, 17, 13, 16, 5, 19, 14, 11, 26, 8, 4, 15, 16, 25, 5, 13, 12],
        canvas = el[0],
        ctx = canvas.getContext('2d'),
        chartData = {
          labels: getLabelNumbers(31),
          datasets: [
            {
              label: 'Engagements',
              data: datasetData1,
              maxBarThickness: 16,
              backgroundColor: '#615dfa'
            },
            {
              label: 'Visits',
              data: datasetData2,
              maxBarThickness: 16,
              backgroundColor: '#3ad2fe'
            },
            {
              data: getCompleterData([datasetData1, datasetData2], 55),
              maxBarThickness: 16,
              backgroundColor: '#e8e8ef'
            }
          ]
        },
        chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodyFontFamily: "'Titillium Web', sans-serif",
            displayColors: false,
            callbacks: {
              title: function() {}
            }
          },
          scales: {
            xAxes: [
              {
                stacked: true,
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500
                }
              }
            ],
            yAxes: [
              {
                stacked: true,
                gridLines: {
                  color: "rgba(234, 234, 245, 1)",
                  zeroLineColor: "rgba(234, 234, 245, 1)",
                  drawBorder: false,
                  drawTicks: false
                },
                ticks: {
                  padding: 20,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500,
                  max: 55,
                  stepSize: 5
                }           
              }
            ]
          }
        };
  
  app.plugins.createChart(ctx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });
});

/*-----------------------------
    RC YEARLY REPORT CHART
-----------------------------*/
app.querySelector('#rc-yearly-report-chart', function (el) {
  const datasetData1 = [119, 142, 110, 122, 163, 139, 143, 110, 141, 121, 139, 190],
        datasetData2 = [98, 65, 132, 78, 112, 82, 100, 80, 100, 58, 48, 139],
        canvas = el[0],
        ctx = canvas.getContext('2d'),
        chartData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: 'Reactions',
              data: datasetData1,
              fill: false,
              lineTension: 0,
              borderWidth: 4,
              borderColor: "#23d2e2",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: 'bevel',
              pointBorderColor: "#23d2e2",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 4,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#23d2e2",
              pointHoverBorderWidth: 4,
              pointRadius: 5,
              pointHitRadius: 10
            },
            {
              label: 'Comments',
              data: datasetData2,
              fill: false,
              lineTension: 0,
              borderWidth: 4,
              borderColor: "#4f91ff",
              borderCapStyle: 'bevel',
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: 'bevel',
              pointBorderColor: "#4f91ff",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 4,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#4f91ff",
              pointHoverBorderWidth: 4,
              pointRadius: 5,
              pointHitRadius: 10
            }
          ]
        },
        chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodyFontFamily: "'Titillium Web', sans-serif",
            displayColors: false,
            callbacks: {
              title: function() {}
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(234, 234, 245, 1)",
                  zeroLineColor: "rgba(234, 234, 245, 1)",
                  drawBorder: false,
                  drawTicks: false
                },
                ticks: {
                  padding: 14,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(234, 234, 245, 1)",
                  zeroLineColor: "rgba(234, 234, 245, 1)",
                  drawBorder: false
                },
                ticks: {
                  padding: 20,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500,
                  min: 20,
                  max: 220,
                  stepSize: 40
                }           
              }
            ]
          }
        };
  
  app.plugins.createChart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
  });
});

/*---------------------------
    VS PERFORMANCE CHART
---------------------------*/
app.querySelector('#vs-performance-chart', function (el) {
  const datasetData1 = [140, 90, 155, 180],
        datasetData2 = [120, 25, 130, 110],
        canvas = el[0],
        ctx = canvas.getContext('2d'),
        chartData = {
          labels: ['Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [
            {
              label: 'Views',
              data: datasetData1,
              maxBarThickness: 16,
              backgroundColor: '#615dfa'
            },
            {
              label: 'Sales',
              data: datasetData2,
              maxBarThickness: 16,
              backgroundColor: '#3ad2fe'
            }
          ]
        },
        chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodyFontFamily: "'Titillium Web', sans-serif",
            displayColors: false,
            callbacks: {
              title: function() {}
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                ticks: {
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500
                }
              }
            ],
            yAxes: [
              { 
                gridLines: {
                  display: false
                },
                ticks: {
                  display: false
                }           
              }
            ]
          }
        };
  
  app.plugins.createChart(ctx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
  });
});

/*---------------------------
    EARNINGS REPORT CHART
---------------------------*/
app.querySelector('#earnings-report-chart', function (el) {
  const datasetData = [0, 15, 0, 0, 0, 20, 10, 15, 40, 20, 25, 25, 15, 10, 20, 23, 23, 15, 30, 40, 30, 20, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        canvas = el[0],
        ctx = canvas.getContext('2d'),
        chartData = {
          labels: getLabelNumbers(31),
          datasets: [
            {
              label: 'Earnings',
              data: datasetData,
              lineTension: .5,
              borderWidth: 2,
              backgroundColor: 'rgba(35, 210, 226, .2)',
              borderColor: "#23d2e2",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: 'bevel',
              pointBorderColor: "#fff",
              pointBackgroundColor: "#23d2e2",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderColor: "#fff",
              pointHoverBackgroundColor: "#23d2e2",
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 5
            }
          ]
        },
        chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodyFontFamily: "'Titillium Web', sans-serif",
            displayColors: false,
            callbacks: {
              title: function() {}
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(234, 234, 245, 1)",
                  zeroLineColor: "rgba(234, 234, 245, 1)",
                  drawBorder: false,
                  drawTicks: false
                },
                ticks: {
                  padding: 14,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(234, 234, 245, 1)",
                  zeroLineColor: "rgba(234, 234, 245, 1)",
                  drawBorder: false
                },
                ticks: {
                  padding: 20,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500,
                  max: 55,
                  stepSize: 5,
                  callback: function(value, index, values) {
                    return '$' + value;
                  }
                }           
              }
            ]
          }
        };
  
  app.plugins.createChart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
  });
});

/*---------------------------
    MEMBERS REPORT CHART
---------------------------*/
app.querySelector('#members-report-chart', function (el) {
  const datasetData = [8, 4, 8, 5, 10, 13, 11, 11, 13, 17, 5, 12],
        canvas = el[0],
        ctx = canvas.getContext('2d'),
        chartData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Members',
              data: datasetData,
              lineTension: 0,
              borderWidth: 2,
              backgroundColor: 'rgba(97, 93, 250, .1)',
              borderColor: "#615dfa",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: 'bevel',
              pointBorderColor: "#615dfa",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderColor: "#615dfa",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderWidth: 2,
              pointRadius: 4,
              pointHitRadius: 5
            }
          ]
        },
        chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodyFontFamily: "'Titillium Web', sans-serif",
            displayColors: false,
            callbacks: {
              title: function() {}
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(234, 234, 245, 1)",
                  zeroLineColor: "rgba(234, 234, 245, 1)",
                  drawBorder: false,
                  drawTicks: false
                },
                ticks: {
                  padding: 14,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(234, 234, 245, 1)",
                  zeroLineColor: "rgba(234, 234, 245, 1)",
                  drawBorder: false
                },
                ticks: {
                  padding: 20,
                  fontFamily: "'Rajdhani', sans-serif",
                  fontColor: '#8f91ac',
                  fontSize: 12,
                  fontStyle: 500,
                  max: 20,
                  stepSize: 2,
                  beginAtZero: true
                }           
              }
            ]
          }
        };
  
  app.plugins.createChart(ctx, {
    type: 'line',
    data: chartData,
    options: chartOptions
  });
});