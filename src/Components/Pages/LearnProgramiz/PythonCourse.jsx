import React from 'react';
import './PythonCourse.css';
import { useNavigate, useParams } from 'react-router-dom';
import LanguageHeader from '../NewPage/LanguageHeader';

const PythonCourse = () => {
  const { courseName } = useParams();
  console.log(courseName);
  
  const navigate = useNavigate();
  const handleEnrollmentClick =()=> {
    navigate("/try-now")
  }
  return (
   
    <>
       <LanguageHeader/>

      <div className="container  my-5">
            <div className="p-4  d-flex justify-content-between bg-light rounded-3">
              <div>
                <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-2">
                  <h5 className="mb-0 text-primary fw-bold">Nebula </h5>
                  <span className="badge text-primary ms-2">PRO</span>
                </div>
                  <small className="text-danger fw-semibold d-block">Recommended Course:</small>
                  <h2 className="fw-bold my-2">Master {courseName} Programming</h2>
                  <p className="mb-1 text-muted">Perfect for beginners serious about building a career in {courseName}.</p>
                  <p className="mb-4 text-muted">Created by the Programiz team with over a decade of experience.</p>
                  <button className="btn btn-primary px-4" 
                  onClick={handleEnrollmentClick}>
                    Try Now <i className="fas fa-arrow-right ms-2"></i>
                  </button>
              </div>

              <div className="mt-4 mt-lg-0 text-start">
                <ul className="list-unstyled ms-lg-4">
                  <li className="mb-3">
                    <i className="fas fa-user-graduate me-2"></i>
                    <strong>Enrollment:</strong> 317k
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-laptop-code me-2"></i>
                    <strong>Practice Problems:</strong> 239+
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-project-diagram me-2"></i>
                    <strong>Projects:</strong> 5+
                  </li>
                  <li>
                    <i className="fas fa-certificate me-2"></i>
                    <strong>Certifications</strong>
                  </li>
                </ul>
              </div>
          
          </div>
  
      </div>

      <div className="container">
        <h1>Learn {courseName } Programming</h1>
        <p>
          {courseName} is one of the top programming languages in the world, widely used in fields such as AI, machine learning, data science, and web development.
        </p>
        <p>
          The simple and English-like syntax of {courseName} makes it a go-to language for beginners who want to get into coding quickly.
        </p>
        <p>
          Because {courseName} is used in multiple fields, there is a high demand for {courseName} developers, with competitive base salaries.
        </p>

        <p className="guide-intro">In this guide, we will cover:</p>
        <ul className="link-list">
          <li><a href="#">Beginner's Guide to {courseName}</a></li>
          <li><a href="#">Is {courseName} for you?</a></li>
          <li><a href="#">Best Way to Learn {courseName}</a></li>
          <li><a href="#">How to Run {courseName}?</a></li>
        </ul>

        <p className="final-note">
          If you are simply looking to learn {courseName} step-by-step, you can follow our free tutorials in the next section.
        </p>
      </div>

      <div className="container my-5">
        <h2 className="fw-bold text-center mb-3">Beginner's Guide to {courseName}</h2>
        <p className="text-center">
          These tutorials will provide you with a solid foundation in {courseName} and prepare you for your career goals.
        </p>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <div class="accordion" id="pythonAccordion">
              
                <div className="accordion" id="pythonAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingIntro">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseIntro"
                        aria-expanded="false"
                        aria-controls="collapseIntro"
                      >
                        Introduction
                      </button>
                    </h2>
                    <div
                      id="collapseIntro"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingIntro"
                      data-bs-parent="#pythonAccordion"
                    >
                      <div className="accordion-body text-center">
                        <ul className="list-unstyled">
                          <li><a href="#" className="text-primary">How to Get Started With {courseName}?</a></li>
                          <li><a href="#" className="text-primary">Your First {courseName} Program</a></li>
                          <li><a href="#" className="text-primary">{courseName} Comments</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFundamentals">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFundamentals" aria-expanded="false" aria-controls="collapseFundamentals">
                      {courseName} Fundamentals
                    </button>
                  </h2>
                  <div id="collapseFundamentals" className="accordion-collapse collapse" aria-labelledby="headingFundamentals" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">Variables</a></li>
                        <li><a href="#" className="text-primary">Data Types</a></li>
                        <li><a href="#" className="text-primary">Type Conversion</a></li>
                        <li><a href="#" className="text-primary">User Input</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFlow">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFlow" aria-expanded="false" aria-controls="collapseFlow">
                      {courseName} Flow Control
                    </button>
                  </h2>
                  <div id="collapseFlow" className="accordion-collapse collapse" aria-labelledby="headingFlow" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">if...else Statements</a></li>
                        <li><a href="#" className="text-primary">for Loops</a></li>
                        <li><a href="#" className="text-primary">while Loops</a></li>
                        <li><a href="#" className="text-primary">break and continue</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingDataTypes">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDataTypes" aria-expanded="false" aria-controls="collapseDataTypes">
                      {courseName} Data Types
                    </button>
                  </h2>
                  <div id="collapseDataTypes" className="accordion-collapse collapse" aria-labelledby="headingDataTypes" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">List</a></li>
                        <li><a href="#" className="text-primary">Tuple</a></li>
                        <li><a href="#" className="text-primary">Set</a></li>
                        <li><a href="#" className="text-primary">Dictionary</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFunctions">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFunctions" aria-expanded="false" aria-controls="collapseFunctions">
                      {courseName} Functions
                    </button>
                  </h2>
                  <div id="collapseFunctions" className="accordion-collapse collapse" aria-labelledby="headingFunctions" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">Function Definition</a></li>
                        <li><a href="#" className="text-primary">Function Arguments</a></li>
                        <li><a href="#" className="text-primary">Return Statement</a></li>
                        <li><a href="#" className="text-primary">Lambda Functions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFiles">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFiles" aria-expanded="false" aria-controls="collapseFiles">
                      {courseName} Files
                    </button>
                  </h2>
                  <div id="collapseFiles" className="accordion-collapse collapse" aria-labelledby="headingFiles" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">Reading Files</a></li>
                        <li><a href="#" className="text-primary">Writing to Files</a></li>
                        <li><a href="#" className="text-primary">Working with File Paths</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingExceptions">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExceptions" aria-expanded="false" aria-controls="collapseExceptions">
                      {courseName} Exception Handling
                    </button>
                  </h2>
                  <div id="collapseExceptions" className="accordion-collapse collapse" aria-labelledby="headingExceptions" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">Try and Except</a></li>
                        <li><a href="#" className="text-primary">Finally Block</a></li>
                        <li><a href="#" className="text-primary">Raising Exceptions</a></li>
                        <li><a href="#" className="text-primary">Custom Exceptions</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOOP">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOOP" aria-expanded="false" aria-controls="collapseOOP">
                      {courseName} Object and Class
                    </button>
                  </h2>
                  <div id="collapseOOP" className="accordion-collapse collapse" aria-labelledby="headingOOP" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">Classes and Objects</a></li>
                        <li><a href="#" className="text-primary">Constructor</a></li>
                        <li><a href="#" className="text-primary">Inheritance</a></li>
                        <li><a href="#" className="text-primary">Polymorphism</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAdvanced">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdvanced" aria-expanded="false" aria-controls="collapseAdvanced">
                      {courseName} Advanced Topics
                    </button>
                  </h2>
                  <div id="collapseAdvanced" className="accordion-collapse collapse" aria-labelledby="headingAdvanced" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">Iterators</a></li>
                        <li><a href="#" className="text-primary">Generators</a></li>
                        <li><a href="#" className="text-primary">Decorators</a></li>
                        <li><a href="#" className="text-primary">Modules and Packages</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingDateTime">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDateTime" aria-expanded="false" aria-controls="collapseDateTime">
                      {courseName} Date and Time
                    </button>
                  </h2>
                  <div id="collapseDateTime" className="accordion-collapse collapse" aria-labelledby="headingDateTime" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">datetime Module</a></li>
                        <li><a href="#" className="text-primary">Working with Dates</a></li>
                        <li><a href="#" className="text-primary">Working with Time</a></li>
                        <li><a href="#" className="text-primary">strftime and strptime</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

          
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingAdditional">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAdditional" aria-expanded="false" aria-controls="collapseAdditional">
                      Additional Topic
                    </button>
                  </h2>
                  <div id="collapseAdditional" className="accordion-collapse collapse" aria-labelledby="headingAdditional" data-bs-parent="#pythonAccordion">
                    <div className="accordion-body text-center">
                      <ul className="list-unstyled">
                        <li><a href="#" className="text-primary">{courseName} Virtual Environment</a></li>
                        <li><a href="#" className="text-primary">pip and pipenv</a></li>
                        <li><a href="#" className="text-primary">Installing Third-Party Libraries</a></li>
                        <li><a href="#" className="text-primary">Introduction to Jupyter Notebook</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

            <div className="contents">
        <h2 className="mb-4">Is {courseName} for you?</h2>
            <p>
            Whether {courseName} is the right choice depends on what you want to accomplish and your career goals.
            </p>
            <h4 className="mb-4">{courseName} from Learning Perspective</h4>
            <p>
            If you are new to programming and prefer simplicity, {courseName} is probably the right choice for you.
            </p>
            <p> Let's see an example. </p>
            </div>

            <div className="code-box">
          <div className="code-column">
            <div className="code-title">main.py</div>
            <div className="code-content">
              <div><span className="blue">x</span> = <span className="orange">5</span></div>
              <div><span className="blue">y</span> = <span className="orange">10</span></div>
              <div><span className="purple">print</span>(<span className="blue">x</span> + <span className="blue">y</span>)</div>
            </div>
          </div>
          <div className="code-divider" />
          <div className="code-column">
            <div className="code-title">main.c</div>
            <div className="code-content">
              <div><span className="blue">#include</span> <span className="green">&lt;stdio.h&gt;</span></div>
              <div><span className="purple">int</span> <span className="blue">main</span>() &#123;</div>
              <div style={{ paddingLeft: '20px' }}>
                <span className="purple">int</span> <span className="blue">x</span> = <span className="orange">5</span>, <span className="blue">y</span> = <span className="orange">10</span>;
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <span className="purple">printf</span>(<span className="green">"%d"</span>, <span className="blue">x</span> + <span className="blue">y</span>);
              </div>
              <div><span className="purple">return</span> <span className="orange">0</span>;</div>
              <div>&#125;</div>
            </div>
          </div>
            </div>
            
            <div className="contents2">
            <p>Here, both programs in C and {courseName} perform the same task. However,
              the {courseName} code is much easier to understand, even if you have never been a programmer before.</p>
              <p>That being said, there are some advantages to learning languages like C as your first language. For example, C is much closer to the hardware and allows you to work with computer memory directly, 
                thus providing you with a deeper understanding of how your code actually works.</p>
                <p>On the other hand, {courseName}'s clear, English-like syntax allows you to concentrate on problem-solving and building logic without 
                  being concerned about unnecessary complexities.</p>
                  <p>So, it's up to you whether you want to quickly get started with programming or
                    really take your time to understand the nitty-gritty parts of programming.</p>
                    <h2>Best Way to Learn {courseName}</h2>
                    <p>There is no right or wrong way to learn {courseName}. It all depends on your learning style and pace.</p>
                    <p>In this section, we have included the best {courseName} learning resources tailored to your 
                      learning preferences, be it text-based, video-based, or interactive courses.</p>
                      <h4>Text-based Tutorial</h4>
                      <p>If you want to learn {courseName} for free with a well-organized, step-by-step tutorial, you can use our free {courseName} tutorials.</p>
                      <p>Our tutorials will guide you through {courseName} one step at a time, using practical examples to strengthen your 
                        foundation.</p>
                      <h4>Interactive Course</h4>
                      <p>Learning to code is tough. It requires dedication and consistency, and you need to write tons of code yourself.</p>
                    <p> While videos and tutorials provide you with a step-by-step guide, they lack hands-on experience and structure.</p>
                        <p>Recognizing all these challenges, Programiz offers a premium Learn {courseName} Course that allows you to gain
                          hands-on learning experience by solving challenges, building real-world projects, and tracking your progress.</p>
              <h4>Online Video</h4>
              <p>If you're more of a visual learner, we have created a comprehensive {courseName} course 
              for beginners that will guide you on your {courseName} journey.</p>
        <p>Additionally, there's a popular {courseName} playlist by Corey Schafer available on YouTube to further guide you on your {courseName} journey.</p>
        <p>If you're looking for a structured university course at zero cost, visit {courseName} Course - University of Helsinki.</p>
        <h4>Mobile App</h4>
        <p>While it's possible to learn {courseName} from mobile apps, it's not the ideal way because writing code can be challenging. Additionally,
          it's difficult to build real-world projects with multiple files on mobile devices.</p>
        <h3>How to Run{courseName}?</h3>
        <h5>1. Run {courseName} in your browser.</h5>
        <p>We have created an online editor to run {courseName} directly in your browser. 
          You don't have to go through a tedious installation process. It's completely free, and you can start coding directly.</p>
          <h5>2. Install {courseName} on Your computer.</h5>
          <p>Once you start writing complex programs and creating projects, you should definitely install {courseName} on your computer.
            This is especially necessary when you are working with projects that involve multiple files and folders.</p>
        <p>To install {courseName} on your device, you can use this guide.</p>
            </div>
        </div>
      </div>
    </>

  );
};

export default PythonCourse;