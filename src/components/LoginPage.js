import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the email
    console.log('Submitted email:', email);
    // Here, you can integrate the logic to send a code to the user's email
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Hold Strong Fitness & Nutrition</h1>
        <h2 className="login-subtitle">Log in</h2>
        <p className="login-description">
          Enter your email and we'll send you a login code.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
