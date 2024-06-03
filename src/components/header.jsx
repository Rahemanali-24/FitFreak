import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link} from "react-router-dom";
// import Log from './workoutlog';
// import Home from "./home";


// import { NavLink,useNavigate} from 'react-router-dom'

// const menuItems = [

//   {
//       name: 'Log',
//       to: 'Log',
//   },

// ]

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <img src="src/assets/logo.png" alt="bug" height={50} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link
                  to=""
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              
              
               <li>
                 <Link to="WorkoutLog" className="nav-link text-white">
                        WorkoutLog
                      </Link>
               </li>
              

              <li className="nav-item">
                <Link to="/WaterLog" className="nav-link text-white">
                  Water Log
                </Link>
              </li>

                <li className="nav-item">
                <Link to="/FoodLog" className="nav-link text-white">
                  Food Log
                </Link>
              </li>

              <li className="nav-item">
                <Link to = "Progress" className="nav-link text-white" href="#">
                  Progress
                </Link>
              </li>
             
              <Button variant="danger" onClick={handleShow}>
                SignUp
              </Button>
              <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="text-white">UserName</Form.Label>
                      <Form.Control
                        type="UserName"
                        placeholder="Username"
                        autoFocus
                      />

                      <Form.Label className="text-white">Email</Form.Label>
                      <Form.Control
                        type="Email"
                        placeholder="Email"
                        autoFocus
                      />

                      <Form.Label className="text-white">Weight</Form.Label>
                      <Form.Control
                        type="Weight"
                        placeholder="Weight"
                        autoFocus
                      />

                      <Form.Label className="text-white">Lifestyle</Form.Label>
                      <Form.Control
                        type="Lifestyle"
                        placeholder="Lifestyle"
                        autoFocus
                      />

                      <Form.Label className="text-white">Goal</Form.Label>
                      <Form.Control type="Goal" placeholder="Goal" autoFocus />

                      <Form.Label className="text-white">Height</Form.Label>
                      <Form.Control
                        type="Height"
                        placeholder="Height"
                        autoFocus
                      />
                      <Form.Label className="text-white">BMI</Form.Label>
                      <Form.Control type="BMI" placeholder="BMI" autoFocus />
                      <Form.Label className="text-white">BirthDay</Form.Label>
                      <Form.Control
                        type="BirthDay"
                        placeholder="BirthDay"
                        autoFocus
                      />
                      <Form.Label className="text-white">Age</Form.Label>
                      <Form.Control type="Age" placeholder="Age" autoFocus />
                      <Form.Label className="text-white">Gender</Form.Label>
                      <Form.Control
                        type="Gender"
                        placeholder="Gender"
                        autoFocus
                      />
                    </Form.Group>
                  </Form>
                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Body>
              </Modal>
              <Button className="ms-3" variant="danger">
                Sign In
              </Button>{" "}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
