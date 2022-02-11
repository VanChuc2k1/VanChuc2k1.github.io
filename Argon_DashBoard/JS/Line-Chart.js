var xValues1 = ['May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues1,
    datasets: [{ 
      label:'Performance',
      data: [0,20,10,30,15,40,19,60],
      borderColor: "rgb(5, 133, 238)",
      fill: false,
    }]
  },
  options: {
    elements: {
        point:{
            radius: 0
        }
    },
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        yAxes: {
            ticks: {
                stepSize: 10,
                callback: (label) => `$ ${label}k`
            }          
        }
    },
    tension: 0.3,
    stepped:false,
    hoverRadius:5,
    
    

}
});