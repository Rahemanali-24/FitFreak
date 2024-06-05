import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "../style/food_log.css";

function FoodLog() {
  const [foodLogs, setFoodLogs] = useState([]);
  const [newFoodIntake, setNewFoodIntake] = useState({
    Date: "",
    FoodName: "",
    Calories: "",
    Quantity: "",
    Fat: "",
    Protein: "",
    Carbohydrates: "",
    Sugar: "",
  });

  useEffect(() => {
    fetchFoodLogs();
    // Retrieve data from local storage
    const storedFoodLogs = localStorage.getItem("foodLogs");
    if (storedFoodLogs) {
      setFoodLogs(JSON.parse(storedFoodLogs));
    }
  }, []);

  const fetchFoodLogs = () => {
    fetch("http://localhost:3000/api/v1/getFoodIntake")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setFoodLogs(data.data);
          // Store data in local storage
          localStorage.setItem("foodLogs", JSON.stringify(data.data));
        } else {
          console.error("Error fetching food intake logs:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching food intake logs:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFoodIntake((prevIntake) => ({
      ...prevIntake,
      [name]: value,
    }));
  };

  const addFoodIntake = () => {
    fetch("http://localhost:3000/api/v1/addFoodIntake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFoodIntake),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          fetchFoodLogs(); // Fetch updated food logs
          setNewFoodIntake({
            Date: "",
            FoodName: "",
            Calories: "",
            Quantity: "",
            Fat: "",
            Protein: "",
            Carbohydrates: "",
            Sugar: "",
          });
        } else {
          console.error("Error adding food intake:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error adding food intake:", error);
      });
  };

  return (
    <div className="log-main-table">
      <div className="log-table-data">
        <h1 className="text-center text-danger h3 pb-3">Log Food Intake</h1>
        <Table className="logWorkOut">
          <tbody className="log-table-body">
            <tr className="logProperty">
              <td className="log-table-content">Date</td>
              <td colSpan={4}>
                <input
                  type="date"
                  name="Date"
                  value={newFoodIntake.Date}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="logProperty">
              <td className="table-content">FoodName</td>
              <td colSpan={4}>
                <input
                  type="text"
                  name="FoodName"
                  value={newFoodIntake.FoodName}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="logProperty">
              <td className="table-content">Calories (g):</td>
              <td colSpan={4}>
                <input
                  type="text"
                  name="Calories"
                  value={newFoodIntake.Calories}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="logProperty">
              <td className="table-content">Quantity (g):</td>
              <td colSpan={4}>
                <input
                  type="text"
                  name="Quantity"
                  value={newFoodIntake.Quantity}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="logProperty">
              <td className="table-content">Fat (g):</td>
              <td colSpan={4}>
                <input
                  type="text"
                  name="Fat"
                  value={newFoodIntake.Fat}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="logProperty">
              <td className="table-content">Protein (g):</td>
              <td colSpan={4}>
                <input
                  type="text"
                  name="Protein"
                  value={newFoodIntake.Protein}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="logProperty">
              <td className="table-content">Carbohydrates (g):</td>
              <td colSpan={4}>
                <input
                  type="text"
                  name="Carbohydrates"
                  value={newFoodIntake.Carbohydrates}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="logProperty">
              <td className="table-content">Sugar (g):</td>
              <td colSpan={4}>
                <input
                  type="text"
                  name="Sugar"
                  value={newFoodIntake.Sugar}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <Button
                  className="btn1"
                  variant="danger"
                  onClick={addFoodIntake}
                >
                  Add Food Intake
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="log-table-result">
        <h1 className="text-center text-danger mt-4 h3 pb-3">FoodTake History</h1>
        <Table striped bordered hover className="logFoodOutResult">
          <thead>
            <tr>
              <th>Date</th>
              <th>FoodName</th>
              <th>Calories</th>
              <th>Quantity (gm)</th>
              <th>Fat</th>
              <th>Protein</th>
              <th>Carbohydrates</th>
              <th>Sugar</th>
            </tr>
          </thead>
          <tbody>
            {foodLogs.map((log, index) => (
              <tr key={index}>
                <td>{log.Date}</td>
                <td>{log.FoodName}</td>
                <td>{log.Calories}</td>
                <td>{log.Quantity}</td>
                <td>{log.Fat}</td>
                <td>{log.Protein}</td>
                <td>{log.Carbohydrates}</td>
                <td>{log.Sugar}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default FoodLog;
