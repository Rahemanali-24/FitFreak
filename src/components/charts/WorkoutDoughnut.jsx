import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: "Today's Workout Distribution Chart",
    },
  },
};

const WorkoutDoughnut = () => {
  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    fetchWorkoutData();
  }, []);

  const fetchWorkoutData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/getWorkOutLog');
      const data = response.data;
      if (data.success) {
        setWorkoutData(data.data);
      } else {
        console.error('Error fetching workout data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching workout data:', error);
    }
  };

  const generateChartData = () => {
    if (workoutData) {
      const workoutTypes = {};
      workoutData.forEach(entry => {
        const type = entry.WorkOutType;
        if (workoutTypes[type]) {
          workoutTypes[type] += 1;
        } else {
          workoutTypes[type] = 1;
        }
      });

      const labels = Object.keys(workoutTypes);
      const specificData = Object.values(workoutTypes);
      const specificColors = [
        "rgb(83,124,56)",
        "rgb(123,165,145)",
        "rgb(204, 34, 43)",
        "rgb(241, 91, 76)",
      ];
      const data = {
        labels,
        datasets: [
          {
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
      <h1>Today s Workout Distribution Chart</h1>
      {workoutData && <Doughnut style={{ width: '50%', margin: '0 auto' }} options={options} data={generateChartData()} />}
    </>
  );
};

export default WorkoutDoughnut;
