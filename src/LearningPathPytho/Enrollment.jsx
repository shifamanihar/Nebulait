import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Enrollment.css";
import certificateImg from "./images/certificate.png";

const Enrollment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleJobNotificationClick = () => {
    navigate("/job-notification");
  };

  const handleWishlistClick = () => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const course = { id: "python-course", name: "Learn Python" };

    const courseIndex = wishlist.findIndex((item) => item.id === course.id);

    if (courseIndex === -1) {
      wishlist.push(course);
      setIsWishlisted(true);
      alert("❤️ Added to your Wishlist!");
    } else {
      wishlist.splice(courseIndex, 1);
      setIsWishlisted(false);
      alert("💔 Removed from your Wishlist!");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const course = { id: "python-course", name: "Learn Python" };

    const courseIndex = cart.findIndex((item) => item.id === course.id);

    if (courseIndex === -1) {
      cart.push(course);
      setIsInCart(true);
      alert("Added to Cart!");
    } else {
      cart.splice(courseIndex, 1);
      setIsInCart(false);
      alert("Removed from Cart!");
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleBuyNow = () => {
    navigate("/buy-now"); // Buy Now button yahan se BuyNow.jsx page par le jaayega
  };

  const courseTitles = [
    "Learn Python Basics",
    "Practice: Python Basics",
    "Learn Python Intermediate",
    "Practice: Python Intermediate",
    "Build Final Project"
  ];

  const courseDescriptions = [
    "Master the basic concepts of Python programming.",
    "Practice real coding problems on basics.",
    "Dive deeper into intermediate Python topics.",
    "Sharpen your skills with intermediate challenges.",
    "Apply your learning by building a final project."
  ];

  const projects = [
    {
      title: "Rock, Paper & Scissors",
      img: "https://cdn-icons-png.flaticon.com/512/184/184250.png"
    },
    {
      title: "Tic Tac Toe",
      img: "https://cdn-icons-png.flaticon.com/512/342/342362.png"
    },
    {
      title: "QR Code Generator",
      img: "https://cdn-icons-png.flaticon.com/512/6081/6081304.png"
    }
  ];

  return (
    <div className="enrollment-page">
      {/* Sticky Sidebar */}
      <aside className="sticky-enroll">
        <div className="course-right">
          {/* Course Benefits */}
          <div className="course-benefits">
            <p>✅ Learn Python step-by-step from start to finish.</p>
            <p>✅ Solve 100+ practice problems in real-time.</p>
            <p>✅ Get certified and prepare for your first Python interview.</p>

            {/* Buttons */}
            <div className="course-buttons-paid">
              <div className="buy-add-buttons">
                <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
                <button className="cart-button" onClick={handleAddToCart}>
                  {isInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>

              <div className="wishlist-container">
                <button className="wishlist-button" onClick={handleWishlistClick}>
                  {isWishlisted ? "🩷 Wishlisted" : "🤍 Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>

          {/* Job Notification Section */}
          <div className="job-notification-box">
            <h2>Stay Updated with Job Notifications</h2>
            <p>Get the latest job opportunities in the tech industry tailored to your skills.</p>
            <button className="job-notification-btn" onClick={handleJobNotificationClick}>
              View Job Notifications
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Course Intro */}
        <section className="course-container">
          <div className="course-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1042/1042337.png"
              alt="Rocket Icon"
              className="course-image"
            />
            <h4 className="course-tag">LEARNING PATH</h4>
            <h1 className="course-title">Learn Python</h1>
            <p className="course-description">
              Learn to code in Python—a beginner-friendly programming language
              used in data analysis, web development, task automation, and more.
            </p>
            <div className="course-info">
              <span>📘 Level: Beginner</span>
              <span>⏱ Duration: 2 months</span>
              <span>💻 Type: Interactive</span>
              <span>🗣 Language: English</span>
              <span>🧩 Practice Problems: 220+</span>
              <span>📝 Quizzes: 80+</span>
            </div>
          </div>
        </section>

        {/* Learning Path Overview */}
        <section className="learning-overview">
          <h2>Learning Path Overview</h2>
          {courseTitles.map((title, index) => (
            <article className="course-box" key={index}>
              <h4>Course {index + 1}</h4>
              <h3>{title}</h3>
              <p>{courseDescriptions[index]}</p>
            </article>
          ))}
          <div className="start-learning-container">
            <button className="start-learning-btn" onClick={handleMenuClick}>
              Get Started Learning
            </button>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h2>
            Learn practically <br />
            <span>by solving real-world problems.</span>
          </h2>
          <p className="project-subtitle">Projects you will create:</p>
          <div className="project-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <img src={project.img} alt={`${project.title} Icon`} />
                <div>
                  <h3>{project.title}</h3>
                  <p>Learn More →</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Section */}
        <section className="certificate-section-wrapper">
          <div className="certificate-section">
            <img src={certificateImg} alt="Certificate Preview" className="cert-preview" />
            <div className="cert-text">
              <h2>Claim Your Certificate</h2>
              <p>You’ll receive an industry-recognized certificate after completing the path.</p>
              <button className="claim-button" onClick={togglePopup}>
                Claim Certificate
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Certificate Preview Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <img src={certificateImg} alt="Full Certificate Preview" />
            <button className="popup-close" onClick={togglePopup}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Enrollment;
