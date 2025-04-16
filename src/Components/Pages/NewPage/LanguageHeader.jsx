import React, { useState } from 'react';
import './LanguageHeader.css';

export default function LanguageHeader() {
  const [activeTab, setActiveTab] = useState('TUTORIALS');

  const tabs = ['TUTORIALS', 'COURSES', 'EXAMPLES', 'REFERENCES', 'ONLINE COMPILER'];

  return (
    <div className="language-header">
      <h2>Learn Python Nebula</h2>
      <div className="language-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active-tab' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
