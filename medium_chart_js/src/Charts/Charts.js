import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

let LineChart;

function Charts() {
    useEffect(() => {
        buildChart();
    }, []);

    const buildChart = () => {
        var ctx = document.getElementById("LineChart").getContext("2d");

        if (typeof LineChart !== "undefined") LineChart.destroy();

        LineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        min: 30,
                        max: 90,
                    }
                },
                animation: {
                    duration: 750,
                },
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true
                            },
                            mode: 'xy',
                        },
                    }
                }
            }
        });
    }

    return (
        <div>
            <h2>My first Chart</h2>
            <canvas id="LineChart" width="1000" height="400"/>
        </div>
    )
}

export default Charts
