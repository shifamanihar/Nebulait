import React, { useState } from 'react';
import './PythonCourse.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LanguageHeader from '../NewPage/LanguageHeader';

const features = [
  {
    title: "Introduction",
    description:<ul>
      <li><Link>How to Get Started With Python?</Link></li>
      <li><Link>Your First Python Program</Link></li>
      <li><Link>Python Comments</Link></li>
    </ul>,
  },
  { title: "Python Fundamentals" ,
    description:<ul>
    <li><Link>Python Variables, Constants and Literals</Link></li>
    <li><Link>Python Type Conversion</Link></li>
    <li><Link>Python Basic Input and Output</Link></li>
    <li><Link>Python Operators</Link></li>
  </ul>,
   },
  { title: "Python Flow Control" ,
    description:<ul>
    <li><Link>Python if...else Statement</Link></li>
    <li><Link>Python for Loop</Link></li>
    <li><Link>Python while Loop</Link></li>
    <li><Link>Python break and continue</Link></li>
    <li><Link>Python pass Statement</Link></li>
  </ul>,
  },
  { title: "Python Data Types",
    description:<ul>
      <li><Link>Python Numbers, Type Conversion and Mathematics</Link></li>
      <li><Link>Python List</Link></li>
      <li><Link>Python Tuple</Link></li>
      <li><Link>Python Sets</Link></li>
      <li><Link>Python Dictionary</Link></li>
    </ul>,
   },
  { title: "Python Functions" ,
    description:<ul>
      <li><Link>Python Functions</Link></li>
      <li><Link>Python Function Arguments</Link></li>
      <li><Link>Python Variable Scope</Link></li>
      <li><Link>Python Global Keyword</Link></li>
      <li><Link>Python Recursion</Link></li>
      <li><Link>Python Modules</Link></li>
      <li><Link>Python Package</Link></li>
      <li><Link>Python Main function</Link></li>
    </ul>,
  },
  { title: "Python Files" ,
    description:<ul>
      <li><Link>Python Directory and Files Management</Link></li>
      <li><Link>Python CSV: Read and Write CSV files</Link></li>
      <li><Link>Reading CSV files in Python</Link></li>
      <li><Link>Writing CSV files in Python</Link></li>
    </ul>,
  },
  { title: "Python Exception Handling" ,
    description:<ul>
      <li><Link>Python Exceptions</Link></li>
      <li><Link>Python Exception Handling</Link></li>
      <li><Link>Python Custom Exceptions</Link></li>
    </ul>,
  },
  { title: "Python Object and Class" ,
    description:<ul>
      <li><Link>Python Objects and Classes</Link></li>
      <li><Link>Python Inheritance</Link></li>
      <li><Link>Python Multiple Inheritance</Link></li>
      <li><Link>Polymorphism in Python</Link></li>
      <li><Link>Polymorphism in Python</Link></li>
    </ul>,
  },
  { title: "Python Date and Time" ,
    description:<ul>
      <li><Link>Python date time </Link></li>
      <li><Link>Python strftime()</Link></li>
<li><Link> Python strptime()</Link></li>
<li><Link>How to get current date and time in Python?</Link></li>
<li><Link>Python Get Current Time</Link></li>
<li><Link>Python timestamp to datetime and vice-versa</Link></li>
<li><Link>Python time Module</Link></li>
<li><Link>Python sleep()</Link></li>
    </ul>,
  },
  { title: "Additional Topic" ,
    description:<ul>
  <li><Link>Precedence and Associativity of Operators in Python</Link> </li>  
<li><Link>Python Keywords and Identifiers</Link></li>
<li><Link>Python Asserts</Link></li>
<li><Link>Python Json</Link></li>
<li><Link>Python pip</Link></li>
<li><Link>Python *args and **kwargs</Link></li>
    </ul>,
  },
];

const PythonCourse = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const handleCardClick = (index) => {
    // If same card is clicked again, close it
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleEnrollmentClick = () => {
    navigate("/try-now");
  };

  return (
    <>
      <div className='course-container-wraper'>
        <LanguageHeader />

        <div className="container-page m-5">
          <div className="p-4 d-flex justify-content-between bg-light rounded-3">
            <div>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2">
                <h5 className="mb-0 text-primary fw-bold">Nebula </h5>
                <span className="badge text-primary ms-2">PRO</span>
              </div>
              <small className="text-danger fw-semibold d-block">Recommended Course:</small>
              <h2 className="fw-bold my-2">Master {courseName} Programming</h2>
              <p className="mb-1 text-muted">Perfect for beginners serious about building a career in {courseName}.</p>
              <p className="mb-4 text-muted">Created by the Programiz team with over a decade of experience.</p>
      
              <button className="btn btn-primary px-4" onClick={handleEnrollmentClick}>
                Try Now <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>

            <div className="mt-4 mt-lg-0 text-start">
              <ul className="list-unstyled ms-lg-4">
                <li className="mb-3"><i className="fas fa-user-graduate me-2"></i><strong>Enrollment:</strong> 317k</li>
                <li className="mb-3"><i className="fas fa-laptop-code me-2"></i><strong>Practice Problems:</strong> 239+</li>
                <li className="mb-3"><i className="fas fa-project-diagram me-2"></i><strong>Projects:</strong> 5+</li>
                <li><i className="fas fa-certificate me-2"></i><strong>Certifications</strong></li>
              </ul>
            </div>
          </div>
        </div>

       

        {/* ✅ Learning Content */}
        <div className="container">
          <h1>Learn {courseName} Programming</h1>
          <p>{courseName} is one of the top programming languages in the world, widely used in fields such as AI, machine learning, data science, and web development.</p>
          <p>The simple and English-like syntax of {courseName} makes it a go-to language for beginners who want to get into coding quickly.</p>
          <p>Because {courseName} is used in multiple fields, there is a high demand for {courseName} developers, with competitive base salaries.</p>
          <p className="guide-intro">In this guide, we will cover:</p>
          <ul className="link-list">
            <li><a href="#">Beginner's Guide to {courseName}</a></li>
            <li><a href="#">Is {courseName} for you?</a></li>
            <li><a href="#">Best Way to Learn {courseName}</a></li>
            <li><a href="#">How to Run {courseName}?</a></li>
          </ul>
          <p className="final-note">If you are simply looking to learn {courseName} step-by-step, you can follow our free tutorials in the next section.</p>
        </div>

        <div className="container my-5">
          <h2 className="fw-bold text-center mb-3">Beginner's Guide to {courseName}</h2>
          <p className="text-center">These tutorials will provide you with a solid foundation in {courseName} and prepare you for your career goals.</p>
        </div>
         {/* ✅ Pink Themed Feature Cards */}
         <div className="container my-5 pink-feature-container">
        {features.map((feature, index) => (
         <div key={index} className="modern-dropdown-card mb-4">
         <div
        className={`dropdown-header ${activeIndex === index ? 'active' : ''}`}
        onClick={() => handleCardClick(index)}
         >
        <h5 className="mb-0">{feature.title}</h5>
        <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
        </div>
        <div
        className={`dropdown-body ${
          activeIndex === index ? 'open' : ''
        }`}
      >
        {feature.description}
      </div>
    </div>
  ))}
</div>
      </div>
    </>
  );
};

export default PythonCourse;