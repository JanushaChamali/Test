import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Admin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newUser, setNewUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [delUser, setDelUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8088/hello/user")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  const [empName, setName] = useState("");
  const [empEmail, setEmail] = useState("");
  const [empAddress, setAddress] = useState("");
  const [empMobileNo, setMobileNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8088/hello/user", {
        empName: empName,
        empEmail: empEmail,
        empAddress: empAddress,
        empMobileNo: empMobileNo,
      }).then((newUser) => setNewUser(newUser.data))
      .catch((err) => console.log(err));

      if (newUser) {
        console.log(newUser);
        console.log("New Employee successfully inserted..");
        alert("Employee successfully inserted..");
      }
    console.log(empName, empEmail, empAddress, empMobileNo);
  };




  const handleClick = (e) => {
    //e.preventDefault();
    console.log('The link was clicked.',e);
    axios
      .delete("http://localhost:8088/hello/user/" + `${e}`, {
      }).then((delUser) => setDelUser(delUser.data))
      .catch((err) => console.log(err));
      if (delUser) {
        console.log(delUser);
        console.log("Employee successfully deleted..");
        alert("Employee successfully deleted..");
      }
  };


  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Employee"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Empoyees Details</b>
            </h2>
          </div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Employee
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Address </th>
                  <th>Mobile </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.empName}</td>
                      <td>{user.empEmail}</td>
                      <td>{user.empAddress}</td>
                      <td>{user.empMobileNo}</td>
                      <td>
                        <a
                          href="#"
                          class="view"
                          title="View"
                          data-toggle="tooltip"
                          style={{ color: "#10ab80" }}
                        >
                          <i class="material-icons">&#xE417;</i>
                        </a>
                        <a
                          href=''
                          onClick={ () =>handleClick(user.empName)}
                          class="edit"
                          title="Edit"
                          data-toggle="tooltip"
                        >
                          <i class="material-icons">&#xE254;</i>
                        </a>
                        <a
                          href=''
                          onClick={ () =>handleClick(user.empName)}
                          class="delete"
                          title="Delete"
                          data-toggle="tooltip"
                          style={{ color: "red" }}
                        >
                          <i class="material-icons">&#xE872;</i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Mobile Number"
                    onChange={(e) => {
                      setMobileNo(e.target.value);
                    }}
                  />
                </div>

                <button type="submit" class="btn btn-success mt-4">
                  Add Record
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
}

export default Admin;
