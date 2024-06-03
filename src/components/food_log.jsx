import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "../style/food_log.css";
function FoodLog() {
  return (
    <>
      <div className="log-main-table">
        <div className="log-table-data">
          <h1 className="text-center text-danger h3 pb-3">Log Food Intake</h1>
          <Table className="logWorkOut">
            <tbody className="log-table-body">
              <tr className="logProperty">
                <td className="log-table-content">Date</td>
                <td colSpan={4}>
                  <input type="date" name="workoutDate" />
                </td>
              </tr>

              <tr className="logProperty">
                <td>
                  <input className="inp" type="text" placeholder="Number of" />
                </td>

                <td width={60}>
                  <select className="mt-1 sel" name="workoutTypeSelect">
                    <option value="">raheman</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </td>
                <td>
                  <input type="text" className="inp" placeholder="Food Name" />
                </td>
                <td>
                  <button className="btn2 btn btn-danger">Auto-Fill</button>
                </td>
              </tr>

              <tr className="logProperty">
                <td className="table-content">Calories (g):</td>
                <td colSpan={4}>
                  <input type="text" name="logCalories" />
                </td>
              </tr>

              <tr className="logProperty">
                <td className="table-content">Fat (g):</td>
                <td colSpan={4}>
                  <input type="text" name="FatCalories" />
                </td>
              </tr>

              <tr className="logProperty">
                <td className="table-content">Sugar (g):</td>
                <td colSpan={4}>
                  <input type="text" name="SugarCalories" />
                </td>
              </tr>

              <tr className="logProperty">
                <td className="table-content">Protein (g):</td>
                <td colSpan={4}>
                  <input type="text" name="ProteinCalories" />
                </td>
              </tr>

              <tr className="logProperty">
                <td className="table-content">Carbohydrates (g):</td>
                <td colSpan={4}>
                  <input type="text" name="ProteinCalories" />
                </td>
              </tr>

              <tr>
                <td colSpan={4}>
                  <Button className="btn1" variant="danger">
                    Add Food Intake
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* FoodIntake Ouput */}

        <div className="log-table-result">
          <h1 className="text-center text-danger mt-4 h3 pb-3">Today&apos;s Workout</h1>
          <Table striped bordered hover className="logFoodOutResult">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Calories</th>
                <th>Quantity (gm)</th>
                <th>Fat</th>
                <th>Protein</th>
                <th>Carbohydrates</th>
                <th>Sugar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-04-27</td>
                <td>Pizza</td>
                <td>281.3</td>
                <td>107</td>
                <td>10.4</td>
                <td>12.2</td>
                <td>35.2</td>
                <td>3.8</td>
              </tr>
              <tr>
                <td>2024-04-27</td>
                <td>Pizza</td>
                <td>281.3</td>
                <td>107</td>
                <td>10.4</td>
                <td>12.2</td>
                <td>35.2</td>
                <td>3.8</td>
              </tr>
              <tr>
                <td>2024-04-27</td>
                <td>Pizza</td>
                <td>281.3</td>
                <td>107</td>
                <td>10.4</td>
                <td>12.2</td>
                <td>35.2</td>
                <td>3.8</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default FoodLog;
