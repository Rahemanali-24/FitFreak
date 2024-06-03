import Table from "react-bootstrap/Table";
import "../style/workout_log.css";
import Button from "react-bootstrap/Button";

function WorkoutLog() {
  return (
    <>
      <div className="main-table">
        <div className="table-data">
        <h1 className="text-center text-danger h3 pb-3">Add New Workout</h1>
        <Table className="addWorkOut">
         
          <tbody className="table-body">
            <tr className="workoutProperty">
              <td className="table-content">WorkOutDate</td>
              <td>
                <input type="date" name="workoutDate" />
              </td>
            </tr>

            <tr className="workoutProperty">
              <td className="table-content">WorkOutType</td>
              <td>
                <select name="workoutTypeSelect">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="table-content">WorkOutName</td>
              <td>
                <select name="workoutNameSelect">
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </td>
            </tr>

            <tr>
              <td className="table-content">Minutes</td>
              <td>
                <input type="text" name="Minutes" />
              </td>
            </tr>

            <tr>
              <td className="table-content">Calculate Burnt</td>
              <td>
                <input type="text" name="calculateBurnt" />
              </td>
            </tr>

            <tr>
              <td className="table-content">Start Time</td>
              <td>
                <input type="date" name="startTime" />
              </td>
            </tr>

            <tr>
              <td colSpan={4}>
              <Button className="btn1" variant="danger">
                Add Workout
              </Button>{" "}
              </td>
              
            </tr>
          </tbody>
        </Table>
        </div>
        
        {/* workOutput show */}



      <div className="table-result">
        <h1 className="text-center text-danger h3 pb-3">Today&apos;s Workout</h1>
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
        <tr>
          <td>2024-04-27</td>
          <td>Cartlo</td>
          <td>Running</td>
          <td>30</td>
          <td>140</td>
          <td>6:30</td>
        </tr>
        <tr>
          <td>2024-04-27</td>
          <td>Cartlo</td>
          <td>Running</td>
          <td>30</td>
          <td>140</td>
          <td>6:30</td>
        </tr>
        <tr>
          <td>2024-04-27</td>
          <td>Cartlo</td>
          <td>Running</td>
          <td>30</td>
          <td>140</td>
          <td>6:30</td>
        </tr>
      </tbody>
    </Table>
    </div>
        </div>
    
    </>
  );
}

export default WorkoutLog;
