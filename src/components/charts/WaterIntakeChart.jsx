import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const WaterIntakeChart = () => {
  const [waterData, setWaterData] = useState(null);

  useEffect(() => {
    fetchWaterData();
  }, []);

  const fetchWaterData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/getWaterLog');
      const data = response.data;
      if (data.success) {
        setWaterData(data.data);
      } else {
        console.error('Error fetching water data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching water data:', error);
    }
  };

  const generateChartData = () => {
    if (waterData) {
      // Sort the water data by date in ascending order
      const sortedData = waterData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
      
      const labels = sortedData.map(entry => entry.Date);
      const specificData = sortedData.map(entry => entry.Quantity);
      const specificColors = [
        'rgb(83,124,56)',
        'rgb(123,165,145)',
        'rgb(204, 34, 43)',
        'rgb(241, 91, 76)',
        'rgb(250, 164, 27)',
        'rgb(255,212,91)'
      ];
      const data = {
        labels,
        datasets: [
          {
            label: 'Water Intake',
            data: specificData,
            backgroundColor: specificColors
          },
        ],
      };
      return data;
    }
    return null;
  };
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Water Intake Chart',
      },
    },
  };

  return (
    <>
      <h1>Water Intake Chart</h1>
      {waterData && <Bar options={options} data={generateChartData()} />}
    </>
  );
};

export default WaterIntakeChart;
