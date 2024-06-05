import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Calories Intake Chart',
    },
  },
};

const CaloriesChart = () => {
  const [caloriesData, setCaloriesData] = useState(null);

  useEffect(() => {
    fetchCaloriesData();
  }, []);

  const fetchCaloriesData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/getWorkOutLog');
      const data = response.data;
      if (data.success) {
        setCaloriesData(data.data);
      } else {
        console.error('Error fetching calories data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching calories data:', error);
    }
  };

  const generateChartData = () => {
    if (caloriesData) {
      // Sort the calories data by date in ascending order
      const sortedData = caloriesData.sort((a, b) => new Date(a.WorkOutDate) - new Date(b.WorkOutDate));
      
      const labels = sortedData.map(entry => entry.WorkOutDate);
      const specificData = sortedData.map(entry => entry.CalculateBurnt);
      const specificColors = [
        'rgb(83,124,56)',
        'rgb(123,165,145)',
        'rgb(204, 34, 43)',
        'rgb(241, 91, 76)',
        'rgb(250, 164, 27)',
        'rgb(255,212,91)',
        'rgb(255,229,180)',
      ];
      const data = {
        labels,
        datasets: [
          {
            label: 'Calories Burned',
            data: specificData,
            backgroundColor: specificColors,
          },
        ],
      };
      return data;
    }
    return null;
  };

  return (
    <>
      <h1>Calories Intake Chart</h1>
      {caloriesData && <Bar options={options} data={generateChartData()} />}
    </>
  );
};

export default CaloriesChart;
