import React, { useState } from 'react';
import Lottie from 'lottie-react';
import animationData from './office.json';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", cpassword: "",
  });
  
  const [errors, setErrors] = useState({
    name: "", email: "", phone: "", password: "", cpassword: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const validateInputs = () => {
    let valid = true;
    let newErrors = {...errors};

    if (!user.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    if (!user.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!user.phone.trim()) {
      newErrors.phone = "Phone is required";
      valid = false;
    } else {
      newErrors.phone = "";
    }

    if (!user.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    if (!user.cpassword.trim()) {
      newErrors.cpassword = "Confirm Password is required";
      valid = false;
    } else {
      newErrors.cpassword = "";
    }

    setErrors(newErrors);

    return valid;
  };

  const PostData = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

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

      navigate("/");
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
                    className={`form-control ${errors.name && "is-invalid"}`}
                    name='name'
                    autoComplete='off'
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email && "is-invalid"}`}
                    name='email'
                    autoComplete='off'
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    autoComplete='off'
                    className={`form-control ${errors.phone && "is-invalid"}`}
                    name='phone'
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    autoComplete='off'
                    className={`form-control ${errors.password && "is-invalid"}`}
                    name='password'
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">Confirm Password</label>
                  <input
                    type="password"
                    autoComplete='off'
                    className={`form-control ${errors.cpassword && "is-invalid"}`}
                    name='cpassword'
                    id="cpassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                  {errors.cpassword && <div className="invalid-feedback">{errors.cpassword}</div>}
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
                  <Link to="/">Already have an account? Sign in</Link>
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
