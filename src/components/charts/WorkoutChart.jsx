import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const WorkoutChart = () => {
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    fetchWorkoutData();
  }, []);

  const fetchWorkoutData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/getWorkOutLog');
      const data = response.data;
      if (data.success) {
        // Sort workout data by date in ascending order
        const sortedData = data.data.sort((a, b) => new Date(a.WorkOutDate) - new Date(b.WorkOutDate));
        setWorkoutData(sortedData);
      } else {
        console.error('Error fetching workout data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching workout data:', error);
    }
  };

  const generateChartData = () => {
    if (workoutData) {
      const labels = workoutData.map(entry => entry.WorkOutDate);
      const specificData = workoutData.map(entry => entry.Minutes);
      const specificColors = [
        "rgb(83,124,56)",
        "rgb(123,165,145)",
        "rgb(204, 34, 43)",
        "rgb(241, 91, 76)",
        "rgb(250, 164, 27)",
        "rgb(255,212,91)",
        "rgb(255,229,180)",
      ];
      const data = {
        labels,
        datasets: [
          {
            label: "Workout Minutes",
            data: specificData,
            backgroundColor: specificColors,
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
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <>
      <h1>Workout Minutes By Days Chart</h1>
      {workoutData && <Bar options={options} data={generateChartData()} />}
    </>
  );
};

export default WorkoutChart;
