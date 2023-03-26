import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './office.json';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: "",
  });
  
  const navigate = useNavigate();

  const handleInputs = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password, cpassword
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration Successful");

      navigate("/Signin");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-lg">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <Lottie
                  animationData={animationData}
                  style={{
                    height: '50vw',
                    maxWidth: '90%',
                    maxHeight: '200px'
                  }}
                  responsive={true}
                />
              </div>
              <form method='POST'>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name='name'
                    autoComplete='off'
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name='email'
                    autoComplete='off'
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    autoComplete='off'
                    className="form-control"
                    name='phone'
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    autoComplete='off'
                    className="form-control"
                    name='password'
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <input
                    type="password"
                    autoComplete='off'
                    className="form-control"
                    name='cpassword'
                    id="cpassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit" name= "signup"
                    className="btn btn-primary mt-3 mr-3" value="register" onClick={PostData}
                  >
                    Sign up
                  </button>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <Link to="/Signin">Already have an account? Sign in</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
