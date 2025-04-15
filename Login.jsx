import React, { useState, useEffect } from "react";
import "../styles/login.css"; // Ensure the CSS for login is imported separately

const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow logic with useEffect
  useEffect(() => {
    const slides = document.querySelectorAll('.slideshow img');
    const changeSlide = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    };
    
    const slideInterval = setInterval(changeSlide, 4000); // Change slide every 2 seconds

    return () => clearInterval(slideInterval); // Clear interval on cleanup
  }, []);

  // Password toggle logic
  const togglePassword = () => {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  };

  const login = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const userError = document.getElementById("userError");
    const passError = document.getElementById("passError");
    const usernameRegex = /^[a-zA-Z0-9_]{5,20}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    userError.textContent = "";
    passError.textContent = "";

    if (!usernameRegex.test(username)) {
      userError.textContent =
        "Username must be 5-20 characters (letters, numbers, underscore).";
      return;
    }
    if (!passwordRegex.test(password)) {
      passError.textContent = "Invalid password format.";
      return;
    }

    // Successful validation (navigate to the Main page)
    window.location.href = "/main"; // Ensure that your route to the Main page is set up properly
  };

  return (
    <div className="login-page">
      <header>Welcome to Task Manager</header>

      {/* Slideshow */}
      <div className="slideshow">
        <img
          src="pic5.jpg"
          className={`slide ${currentIndex === 0 ? "active" : ""}`}
          alt="slide 1"
        />
        <img
          src="pic6.jpg"
          className={`slide ${currentIndex === 1 ? "active" : ""}`}
          alt="slide 2"
        />
        <img
          src="pic7.jpg"
          className={`slide ${currentIndex === 2 ? "active" : ""}`}
          alt="slide 3"
        />
        <img
          src="pic8.jpg"
          className={`slide ${currentIndex === 3 ? "active" : ""}`}
          alt="slide 4"
        />
      </div>

      {/* Overlay */}
      <div className="overlay"></div>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={login}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="Enter Username" />
          <span id="userError" className="error"></span>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter Password" />
          <div className="show-password">
            <input type="checkbox" id="showPass" onClick={togglePassword} />
            <label htmlFor="showPass">Show Password</label>
          </div>
          <span id="passError" className="error"></span>

          <button type="submit">Login →</button>
        </form>
      </div>

      <div className="password-rules">
        <strong>Password Requirements:</strong>
        <ul>
          <li>At least 8 characters long</li>
          <li>Contains at least one uppercase letter</li>
          <li>Contains at least one number</li>
          <li>Contains at least one special character (@$!%*?&)</li>
        </ul>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to <span className="highlight">Task Manager</span>, your
            go-to platform for organizing and managing your daily tasks
            efficiently.
          </p>
          <p>
            Our mission is to enhance productivity by providing easy-to-use
            tools for task tracking, scheduling, and time management.
          </p>
          <p>
            Whether you're a professional, student, or entrepreneur,{" "}
            <span className="highlight">Task Manager</span> helps you stay
            focused, meet deadlines, and achieve your goals.
          </p>
        </div>
        <div className="about-image">
          <img src="task-manager-image.jpg" alt="Task Manager" />
        </div>
      </div>

      <footer>&copy; 2025 S&S All rights reserved</footer>
    </div>
  );
};

export default Login;
