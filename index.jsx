import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/practice.css';

export default function Practice() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const nameText = 'WELCOME TO TASK MANAGER';
  const navigate = useNavigate();

  useEffect(() => {
    if (index < nameText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + nameText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="practice-container">
      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Welcome Text */}
      <div id="welcomePage">
        <h1>{text}</h1>
        <button
          className={`enter-btn ${index === nameText.length ? '' : 'hidden'}`}
          onClick={redirectToLogin}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
}
