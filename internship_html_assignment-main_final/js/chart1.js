

  const ctx = document.getElementById('sale');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Nov','Dec'],
      datasets: [{
        label: 'Sales in Thousands',
        data: [20, 40, 20, 100, 80, 120, 140, 80, 100, 80, 100, 40 ],
        borderWidth: 1,
        tension: 0,
        backgroundColor: "#C8242F",
    cubicInterpolationMode: 'monotone',
    fill: true,
    borderColor: '#C8242F',
    backgroundColor: 'transparent',
    pointBorderColor: '#C8242F',
    pointRadius: 2,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 4,
    pointStyle: 'rectRounded'
      }]
    },
    options: {
        bezierCurve: false,
      scales: {
        y: {
          ticks:{
            max: 140,
            min: 0,
            stepSize: 20
          }
        }
      }
    }
  });
 