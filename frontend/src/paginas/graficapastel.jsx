import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend)
var options = {
    responsive: true,
    maintainAspectRatio: false,
};
var data = {
    labels: ['TI', 'ME', 'OCI', 'PA'],
    datasets: [
        {
            label: "Alumnos por carrera",
            data: [60,70,100,40],
            backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(255,206,86,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(75,192,192,0.2)',
                'rgba(153,102,255,0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,206,86,1)',
                'rgba(54,162,235,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,1)',
            ],
            borderWidth: 1,
        },
    ],
}
export default function Pies(){
    return (
        <div style={{ width: '1000px', margin: '0 auto', height: '700px' }}>
            <Pie data={data} options={options}/> 
        </div>
    )
}