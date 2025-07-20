import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraficaMysql() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then((res) => {
        const labels = res.data.map(item => item.nombre); // nombre and cantidadalumnos are the names of the columnos in the database
        const values = res.data.map(item => item.cantidadalumnos); 
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Cantidad de alumnos',
              data: values,
              backgroundColor: [
                'rgba(144, 0, 0, 0.6)',
                'rgb(241, 120, 127)',
                'rgba(100, 149, 237, 0.6)',
                'rgba(60, 179, 113, 0.6)'
              ],
              borderColor: [
                'rgba(144, 0, 0, 1)',
                'rgb(241, 120, 127)',
                'rgba(100, 149, 237, 1)',
                'rgba(60, 179, 113, 1)'
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  }, []);

  return (
    <div style={{ width: '500px', margin: '0 auto' }}>
      <h2>Gráfico de alumnos</h2>
      <Pie data={chartData} />
      <Bar data={chartData} />
    </div>
  );
}