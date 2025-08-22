import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import './Auth.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    confirm: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    // Name: only alphabets
    if (!/^[A-Za-z ]+$/.test(form.name)) {
      errs.name = 'Name must contain only alphabets.';
    }
    // Username: alphanumeric + special chars
    if (!/^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(form.username)) {
      errs.username = 'Username must be alphanumeric and may include special characters.';
    }
    // Password: same as username, but not equal to username
    if (!/^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(form.password)) {
      errs.password = 'Password must be alphanumeric and may include special characters.';
    }
    if (form.password === form.username) {
      errs.password = 'Password cannot be the same as username.';
    }
    // Confirm: must match password
    if (form.confirm !== form.password) {
      errs.confirm = 'Passwords do not match.';
    }
    // Email: Google email
    if (!/^([a-zA-Z0-9_.+-])+@gmail\.com$/.test(form.email)) {
      errs.email = 'Email must be a valid Gmail address.';
    }
    // Phone: country code + number (e.g., +12345678901)
    if (!/^\+\d{1,3}\d{7,12}$/.test(form.phone)) {
      errs.phone = 'Phone must include country code and number (e.g., +12345678901).';
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
      alert('Sign-Up successful!');
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <InputField label="Name" name="name" value={form.name} onChange={handleChange} error={errors.name} />
          <InputField label="Username" name="username" value={form.username} onChange={handleChange} error={errors.username} />
        </div>
        <div className="input-row">
          <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} error={errors.password} />
          <InputField label="Confirm Password" name="confirm" type="password" value={form.confirm} onChange={handleChange} error={errors.confirm} />
        </div>
        <div className="input-row">
          <InputField label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
          <InputField label="Phone" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
        </div>
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <button className="link-btn" onClick={() => navigate('/')}>Login</button>
      </p>
    </div>
  );
};

export default SignUp;
