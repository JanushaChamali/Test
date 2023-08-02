import React, { useState } from 'react';
import "./App.css";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Reg2() {
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8088/hello/user", {
      firstName: firstName,
      lastName : lastName,
      username : username,
      email : email
    });
    console.log(firstName, lastName, username, email)
  };

  return (
        <div className="form">
            <div className="form-body">

            <form onSubmit={handleSubmit}>
                <h3>User Registration</h3>
                <div className="username">
                    <label className="form__label" >First Name </label>
                    <input
                      className = "form__input" 
                      type="text"
                      placeholder="First name ..."
                      onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div className="lastname">
                    <label className="form__label" >Last Name </label>
                    <input
                      className = "form__input" 
                      type="text"
                      placeholder="Last name ..."
                      onChange={(e) => {setLastName(e.target.value)}}
                    />
                </div>

                <div className="username">
                    <label className="form__label" >Username </label>
                    <input
                      className = "form__input" 
                      type="text"
                      placeholder="Username ..."
                      onChange={(e) => {setUsername(e.target.value)}}
                    />
                </div>                
                
                <div className="email">
                    <label className="form__label" >Email </label>
                    <input
                      className = "form__input" 
                      type="text"
                      placeholder="Email ..."
                      onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

        </div>
      </div>
  );
}

export default Reg2;
