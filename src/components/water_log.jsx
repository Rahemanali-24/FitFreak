import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import '../style/water_log.css';
function WaterLog(){
    return (
        <>
        <div className="water-log-main-table">
        <div className="water-log-table-data">
          <h1 className="text-center text-danger h3 pb-3">Log Water Intake</h1>
          <Table className="water-logWorkOut">
            <tbody className="water-log-table-body">
              <tr className="water-logProperty">
                <td className="water-log-table-content">Date</td>
                <td colSpan={4}>
                  <input type="date" name="workoutDate" />
                </td>
              </tr>

              <tr className="water-logProperty">
                <td>
                  <input className="water-inp" type="text" placeholder="Number of" />
                </td>

                <td width={60}>
                  <select className="mt-1 sel" name="workoutTypeSelect">
                    <option value="">raheman</option>
                    <option value="">2</option>
                    <option value="">3</option>
                  </select>
                </td>
               
              </tr>

              <tr>
                <td colSpan={4}>
                  <Button className="btn1" variant="danger">
                    Add Water Intake
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

          
            {/* waterIntake output */}



        <div className="water-log-table-result">
          <h1 className="text-center text-danger mt-4 h3 pb-3">Todayapos&;s Water Intake</h1>
          <Table striped bordered hover className="water-logFoodOutResult">
            <thead>
              <tr>
                <th>Date</th>
                <th>Quantity</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-04-27</td>
                <td>2</td>
                <td>Glass</td>
                
              </tr>
              <tr>
                <td>2024-04-27</td>
                <td>2</td>
                <td>Glass</td>
                
              </tr>
              <tr>
                <td>2024-04-27</td>
                <td>2</td>
                <td>Glass</td>
                
              </tr>
            </tbody>
          </Table>
        </div>
        </div>
        
        </>
    )
}


export default WaterLog;