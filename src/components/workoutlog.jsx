import  { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function WorkoutLog() {
  const [workoutLog, setWorkoutLog] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    WorkOutDate: '',
    WorkOutType: '',
    WorkOutName: '',
    Minutes: '',
    CalculateBurnt: '',
    StartTime: ''
  });

  useEffect(() => {
    fetchWorkoutLog();
    const storedWaterLogs = localStorage.getItem("workOutLogs");
    if(storedWaterLogs){
      setWorkoutLog(JSON.parse(storedWaterLogs));
    }
  }, []);

  const fetchWorkoutLog = () => {
    fetch('http://localhost:3000/api/v1/getWorkOutLog')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setWorkoutLog(data.data);
        } else {
          console.error('Error fetching workout logs:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error fetching workout logs:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value
    }));
  };

  const addWorkout = () => {
    fetch('http://localhost:3000/api/v1/addWorkOutLog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWorkout)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          fetchWorkoutLog();
          setNewWorkout({
            WorkOutDate: '',
            WorkOutType: '',
            WorkOutName: '',
            Minutes: '',
            CalculateBurnt: '',
            StartTime: ''
          });
        } else {
          console.error('Error adding workout:', data.message);
        }
      })
      .catch((error) => {
        console.error('Error adding workout:', error);
      });
  };

  return (
    <div className="main-table">
      <div className="table-data">
        <h1 className="text-center text-danger h3 pb-3">Add New Workout</h1>
        <Table className="addWorkOut">
          <tbody className="table-body">
            <tr className="workoutProperty">
              <td className="table-content">WorkOutDate</td>
              <td>
                <input
                  type="date"
                  name="WorkOutDate"
                  value={newWorkout.WorkOutDate}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="workoutProperty">
              <td className="table-content">WorkOutType</td>
              <td>
                <input
                  type="text"
                  name="WorkOutType"
                  value={newWorkout.WorkOutType}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="workoutProperty">
              <td className="table-content">WorkOutName</td>
              <td>
                <input
                  type="text"
                  name="WorkOutName"
                  value={newWorkout.WorkOutName}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="workoutProperty">
              <td className="table-content">Minutes</td>
              <td>
                <input
                  type="number"
                  name="Minutes"
                  value={newWorkout.Minutes}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="workoutProperty">
              <td className="table-content">Calculate Burnt</td>
              <td>
                <input
           
                  type="number"
                  name="CalculateBurnt"
                  value={newWorkout.CalculateBurnt}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="workoutProperty">
              <td className="table-content">Start Time</td>
              <td>
                <input
                     className='w-100'
                  type="time"
                  name="StartTime"
                  value={newWorkout.StartTime}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Button className="btn1" variant="danger" onClick={addWorkout}>
                  Add Workout
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="table-result">
        <h1 className="text-center text-danger h3 pb-3">Workout History</h1>
        <Table striped bordered hover className="addWorkOutResult">
          <thead>
            <tr>
              <th className="table-header">Date</th>
              <th>Type</th>
              <th>Name</th>
              <th>Minutes</th>
              <th>Calories Burnt</th>
              <th>Start Time</th>
            </tr>
          </thead>
          <tbody>
            {workoutLog.map((log) => (
              <tr key={log.id}>
                <td>{log.WorkOutDate}</td>
                <td>{log.WorkOutType}</td>
                <td>{log.WorkOutName}</td>
                <td>{log.Minutes}</td>
                <td>{log.CalculateBurnt}</td>
                <td>{log.StartTime}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default WorkoutLog;
