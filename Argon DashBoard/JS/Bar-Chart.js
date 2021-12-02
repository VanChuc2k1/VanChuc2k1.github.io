var xValues1 = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
    new Chart("myChart4", {
        type: "bar",
        data: {
            labels: xValues1,
            datasets: [{
                data: [25, 20, 30, 22, 17, 29],
                backgroundColor: "orangered",
                fill: false,
                borderRadius: 30,
                borderSkipped: true,
                barPercentage: 0.2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                yAxes: {
                    ticks: {
                        stepSize: 10,
                    }
                }
            },
        }
    });