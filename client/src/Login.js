import { useEffect, useState } from 'react'
import './App.css';

import axios from 'axios';
import './loginStyle.css';



function Login() {
  const [user, setUser] = useState([])
  const [empEmail, setEmail] = useState("");
  const [empPassword, setPassword] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();

	axios.post('http://localhost:8088/hello/user/login',{
		empEmail:empEmail,
		empPassword:empPassword
	})
    .then(user => setUser(user.data))	
    .catch(err => console.log(err))
	console.log(empEmail, empPassword);
	console.log(user) 
	if (user.status == 'ok'){
		window.location.href = "./Admin";
	}
  }


  return (
    <div className="container">  
    <br/><br/>      
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
        
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Sign In</h3>
			</div>
			<div className="card-body">
				<form onSubmit={onSubmit }>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" className="form-control" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
						
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" className="form-control" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/>
					</div>
					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
                        
                    <button type="submit" className="btn float-right login_btn">Login</button>
					</div>
				</form>
			</div>
			<div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div className="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
  );
}

export default Login;




