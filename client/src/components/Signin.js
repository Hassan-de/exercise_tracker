import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () =>{
  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const navigate = useNavigate();

const signinUser = async(e) =>{
  e.preventDefault();
  const res =await fetch('/signin', {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  });

  const data = res.json();
  if(res.status ===400 || !data){
    window.alert("Invalid email or password");
  }
  else{
    window.alert("Signin successful");
    navigate("/");
  }
  
}
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign In</h3>
              <form method="POST" >
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    autoComplete='off'
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    value="Signin"
                    onClick={signinUser}
                    className="btn btn-primary mt-3 mr-3"
                  >
                    Sign In
                  </button>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <Link to="/Signup">Don't have an account? Sign up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
