import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    // Username: alphanumeric + special chars
    if (!/^[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/.test(form.username)) {
      errs.username = 'Username must be alphanumeric and may include special characters.';
    }
    // Password: same as username, but not equal to username
    if (!/^[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+$/.test(form.password)) {
      errs.password = 'Password must be alphanumeric and may include special characters.';
    }
    if (form.password === form.username) {
      errs.password = 'Password cannot be the same as username.';
    }
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Login successful!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          error={errors.username}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />
        <button type="submit" className="auth-btn">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button className="link-btn" onClick={() => navigate('/signup')}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;
