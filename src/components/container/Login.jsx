import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { userThunk } from '../../state/thunk/userThunk';

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: 'john@mail.com',
    password: 'changeme'
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userThunk(form))
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
          disabled
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
          disabled
        />

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
