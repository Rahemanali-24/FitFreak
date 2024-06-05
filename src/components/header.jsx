import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast styles
// import { toast } from 'react-toastify';


function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  // const handleShow1 = () => setShow1(true);
  const [newRegister, setRegister] = useState({
    UserName: '',
    Email: '',
    Password: '',
    Weight: '',
    LifeStyle: 'Normal',
    Goal: '',
    Height: '',
    BMI: '',
    BirthDate: '',
    Age: '',
    Gender: ''
  });


  // const registerUser = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/v1/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(newRegister)
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     handleClose(); // Close the modal after successful registration
  //     console.log(response); // Log the response data
  
  //     // Show success toast notification
  //     toast.success('User registered successfully!', {
  //       position: toast.TOP_CENTER
  //     });
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //     // Show error toast notification if registration fails
  //     toast.error('An error occurred while registering. Please try again.', {
  //       position: toast.TOP_CENTER
  //     });
  //   }
  // };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  
  

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
                <Link to="Progress" className="nav-link text-white" href="#">
                  Progress
                </Link>
              </li>
              {/* <Button variant="danger" onClick={handleShow}>
                SignUp
              </Button> */}
              <Modal className="my-modal" show={show} onHide={handleClose}>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className="text-white">UserName</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        autoFocus
                      />
                      <Form.Label className="text-white">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        autoFocus
                      />
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        autoFocus
                      />
                      <Form.Label className="text-white">Weight</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Weight"
                        autoFocus
                      />
                      <Form.Label className="text-white">Lifestyle</Form.Label>
                      <Form.Control
                        as="select"
                        name="Health"
                        value={newRegister.Unit}
                        onChange={handleInputChange}
                      >
                        <option value="Normal">Normal</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Unhealthy">Unhealthy</option>
                      </Form.Control>
                      <Form.Label className="text-white">Goal</Form.Label>
                      <Form.Control type="text" placeholder="Goal" autoFocus />
                      <Form.Label className="text-white">Height</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Height"
                        autoFocus
                      />
                      <Form.Label className="text-white">BMI</Form.Label>
                      <Form.Control type="number" placeholder="BMI" autoFocus />
                      <Form.Label className="text-white">BirthDay</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="BirthDay"
                        autoFocus
                      />
                      <Form.Label className="text-white">Age</Form.Label>
                      <Form.Control type="number" placeholder="Age" autoFocus />
                      <Form.Label className="text-white d-block">
                        Gender
                      </Form.Label>
                      <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        name="gender"
                        value="gender"
                        label="Male"
                        className="d-inline-block text-white"
                      />
                      <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        name="gender"
                        value="gender"
                        label="Female"
                        className="d-inline-block ms-2 text-white"
                      />
                      <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        name="gender"
                        value="gender"
                        label="Not to say"
                        className="d-inline-block ms-2 text-white"
                      />
                    </Form.Group>
                  </Form>

                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
                  {/* <Button
                    className="ms-2"
                    variant="primary"
                    onClick={registerUser} // Call registerUser function on click
                  >
                    Sign Up{' '}
                  </Button> */}
                </Modal.Body>
              </Modal>

              {/* Sign In modal here */}

              {/* <Button variant="danger" className="ms-2" onClick={handleShow1}>
                Sign In
              </Button> */}

              <Modal className="my-modal" show={show1} onHide={handleClose1}>
                <Modal.Body className="modal-body">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className=" text-white">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                        autoFocus
                      />
                      <Form.Label className=" text-white">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        autoFocus
                      />
                    </Form.Group>
                  </Form>
                  <Button variant="danger" onClick={handleClose1}>
                    Close
                  </Button>
                  <Button
                    className="ms-2"
                    variant="primary"
                    onClick={handleClose1}
                  >
                    Sign in{' '}
                  </Button>
                </Modal.Body>
              </Modal>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
