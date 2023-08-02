import { useEffect, useState } from 'react'
import './App.css';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Reg() {

  const mainContainerStyle = {
    // Set the background color to black
    color: 'white', // Set the text color to white
    padding: '20px', // Add some padding to the container (optional)
  };

  const [users, setUsers] = useState([])
  useEffect(()=> {
    axios.get('http://localhost:8088/hello/user')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div style={mainContainerStyle}>
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className='align-center'>
      <h1>User Data</h1> 
      <table className='table' style={mainContainerStyle}>
        <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              User Name
            </th>
            <th>
              E-Mail
            </th>
            <th>
              Registered Date
            </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => {
              return <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.registerDate}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
 </div>
 </div>
  );
}

export default Reg;
