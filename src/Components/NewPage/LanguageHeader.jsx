import React from 'react';
import './LanguageHeader.css';

export default function LanguageHeader() {
  return (
    <div className="language-header">
      <h2>Learn Python Programming</h2>
      <div className="language-tabs">
        <span className="active-tab">TUTORIALS</span>
        <span>COURSES</span>
        <span>EXAMPLES</span>
        <span>REFERENCES</span>
        <span>ONLINE COMPILER</span>
      </div>
    </div>
  );
}
