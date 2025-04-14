import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPython, faJs, faJava, faHtml5, faCss3, faSwift, faRust
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase, faCode, faHashtag
} from '@fortawesome/free-solid-svg-icons';

import './CourseList.css';

// Add icons to the library
library.add(faPython, faJs, faJava, faHtml5, faCss3, faSwift, faRust, faDatabase, faCode, faHashtag);

export default function CourseList() {
  const navigate = useNavigate();

  const courses = [
    { name: "Python", icon: "python", type: "fab" },
    { name: "SQL", icon: "database", type: "fas" },
    { name: "R", icon: "hashtag", type: "fas" },
    { name: "HTML", icon: "html5", type: "fab" },
    { name: "CSS", icon: "css3", type: "fab" },
    { name: "JavaScript", icon: "js", type: "fab" },
    { name: "Java", icon: "java", type: "fab" },
    { name: "C", icon: "code", type: "fas" },
    { name: "C++", icon: "code", type: "fas" },
    { name: "C#", icon: "hashtag", type: "fas" },
    { name: "Go", icon: "code", type: "fas" },
    { name: "Kotlin", icon: "code", type: "fas" },
    { name: "Swift", icon: "swift", type: "fab" },
    { name: "DSA", icon: "code", type: "fas" },
    { name: "NumPy", icon: "code", type: "fas" },
    { name: "Pandas", icon: "code", type: "fas" },
    { name: "Rust", icon: "rust", type: "fab" },
  ];

  const handleCourseClick = (courseName) => {
    localStorage.setItem("selectedCourse", courseName);
    navigate(`/course/${courseName}`);
  };

  return (
    <div className="course-section">
      <h2 className="title">
        Learn Nebula <span className="highlight">for Free</span>
      </h2>
      <p className="subtitle">
        Quick-read tutorials with code examples that you can run and copy—perfect for self-paced learning.
      </p>

      <div className="course-button-container">
        {courses.map((course, index) => (
          <button
            className="course-btn"
            key={index}
            onClick={() => handleCourseClick(course.name)}
          >
            <FontAwesomeIcon
              icon={[course.type, course.icon]}
              className="course-icon"
            />
            {course.name}
          </button>
        ))}
      </div>

      {/* Styled line */}
      <hr className="section-divider" />
    </div>
  );
}
