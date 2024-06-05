import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "../style/water_log.css";

function WaterLog() {
  const [waterLogs, setWaterLogs] = useState([]);
  const [newWaterIntake, setNewWaterIntake] = useState({
    Date: "",
    Quantity: "",
    Unit: "Glass",
  });

  useEffect(() => {
    fetchWaterLogs();

    const storedWaterLogs = localStorage.getItem("waterLogs");
    if(storedWaterLogs){
      setWaterLogs(JSON.parse(storedWaterLogs));
    }
  }, []);

  const fetchWaterLogs = () => {
    fetch("http://localhost:3000/api/v1/getWaterLog")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setWaterLogs(data.data);
        } else {
          console.error("Error fetching water intake logs:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching water intake logs:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWaterIntake((prevIntake) => ({
      ...prevIntake,
      [name]: value,
    }));
  };

  const addWaterIntake = () => {
    fetch("http://localhost:3000/api/v1/addWaterLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWaterIntake),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          fetchWaterLogs(); // Fetch updated water logs
          setNewWaterIntake({
            Date: "",
            Quantity: "",
            Unit: "",
          });


          const updatedWaterLogs = [...waterLogs, newWaterIntake];
          localStorage.setItem("waterLogs", JSON.stringify(updatedWaterLogs));
          console.log("Updated waterLogs in local storage:", updatedWaterLogs);


        } else {
          console.error("Error adding water intake:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error adding water intake:", error);
      });
  };
  

  return (
    <div className="water-log-main-table">
      <div className="water-log-table-data">
        <h1 className="text-center text-danger h3 pb-3">Log Water Intake</h1>
        <Table className="water-logWorkOut">
          <tbody className="water-log-table-body">
            <tr className="water-logProperty">
              <td className="water-log-table-content">Date</td>
              <td colSpan={4}>
                <input
                  type="date"
                  name="Date"
                  value={newWaterIntake.Date}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="water-logProperty">
              <td>
                <input
                  className="water-inp"
                  type="number"
                  placeholder="Number of"
                  name="Quantity"
                  value={newWaterIntake.Quantity}
                  onChange={handleInputChange}
                />
              </td>
              <td width={60}>
                <select
                  className="mt-1 sel"
                  name="Unit"
                  value={newWaterIntake.Unit}
                  onChange={handleInputChange}
                >
                  <option value="Glass">Glass</option>
                  <option value="Litter">Litter</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Button
                  className="btn1"
                  variant="danger"
                  onClick={addWaterIntake}
                >
                  Add Water Intake
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="water-log-table-result">
        <h1 className="text-center text-danger mt-4 h3 pb-3">
          Water Intake History
        </h1>
        <Table striped bordered hover className="water-logFoodOutResult">
          <thead>
            <tr>
              <th>Date</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {waterLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.Date}</td>
                <td>{log.Quantity}</td>
                <td>{log.Unit}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default WaterLog;
