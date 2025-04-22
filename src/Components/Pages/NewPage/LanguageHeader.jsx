import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LanguageHeader.css';

export default function LanguageHeader({Course}) {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: 'TUTORIALS', path: '/python-course' },
    { label: 'COURSES', path: '/python-course' },
    { label: 'EXAMPLES', path: '/examples' },
    { label: 'REFERENCES', path: '/course-list' },
    { label: 'ONLINE COMPILER', path: '/online-compiler' },
  ];

  return (
    <div className="language-header">
      <h2>Learn {Course} programming</h2>
      <div className="language-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={location.pathname === tab.path ? 'active-tab' : ''}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
