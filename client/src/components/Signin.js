import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const validateInputs = () => {
    let valid = true;
    let newErrors = { ...errors };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);

    return valid;
  };

  const signinUser = async (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      return;
    }
    const res = await fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      setErrors({ email: 'Wrong email or password', password: 'Wrong email or password' });
    } else {
      // window.alert('Signin successful');
      navigate('/');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailBlur = () => {
    let newErrors = { ...errors };
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      newErrors.email = '';
    }
    setErrors(newErrors);
  };

  const handlePasswordBlur = () => {
    let newErrors = { ...errors };
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else {
      newErrors.password = '';
    }
    setErrors(newErrors);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign In</h3>
              <form method="POST">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    autoComplete="off"
                    className="form-control"
                    id="password"
                    value={password}
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
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
