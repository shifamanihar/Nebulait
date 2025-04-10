import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TutorialHome.css'; // External CSS

export default function TutorialHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/newpage'); // This will route to the page you want
  };

  return (
    <div className="tutorial-home">
      <button className="custom-button" onClick={handleClick}>
        Go to New Page
      </button>
    </div>
  );
}

