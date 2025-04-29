import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./LearningDashboard.css";

// Sample course object
const course = { id: "python-course", title: "Learn Python", price: 3000 };

const tabs = [
  { key: "all", label: "All Courses" },
  { key: "lists", label: "My Lists" },
  { key: "wishlist", label: "Wishlist" },
  { key: "dashboard", label: "Dashboard" },
  { key: "cart", label: "Your Cart" },
];

const LearningDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const loadWishlistCart = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);
  };

  useEffect(() => {
    loadWishlistCart();
  }, []);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "wishlist" || e.key === "cart") {
        loadWishlistCart();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (section && tabs.some((tab) => tab.key === section)) {
      setActiveTab(section);
    } else {
      setActiveTab("all");
    }
  }, [location]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    navigate(`/learning-dashboard?section=${tabKey}`);
    loadWishlistCart();
  };

  // 👇 Wishlist mein course add karne ka function
  const handleAddToWishlist = () => {
    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedWishlist = [...currentWishlist, course];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist); // Immediately update UI
  };

  // 👇 Cart mein course add karne ka function
  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...currentCart, course];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); // Immediately update UI
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <div>
            <h2 className="tab-title">All Courses</h2>
            <p className="tab-desc">Explore your available courses here.</p>
          
          </div>
        );
      case "lists":
        return (
          <div>
            <h2 className="tab-title">My Lists</h2>
            <p className="tab-desc">Your saved course collections appear here.</p>
          </div>
        );
      case "wishlist":
        return (
          <div>
            <h2 className="tab-title">Wishlist</h2>
            {wishlist.length > 0 ? (
              <ul className="course-list">
                {wishlist.map((course, index) => (
                  <li key={index} className="course-item">
                    <strong>{course.title}</strong> - ₹{course.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="tab-desc">Your wishlist is empty.</p>
            )}
          </div>
        );
      case "dashboard":
        return (
          <div>
            <h2 className="tab-title">Dashboard</h2>
            <p className="tab-desc">Track your learning progress here.</p>
          </div>
        );
      case "cart":
        return (
          <div>
            <h2 className="tab-title">Your Cart</h2>
            {cart.length > 0 ? (
              <ul className="course-list">
                {cart.map((course, index) => (
                  <li key={index} className="course-item">
                    <strong>{course.title}</strong> - ₹{course.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="tab-desc">Your cart is empty.</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="learning-dashboard">
      <header className="dashboard-header">
        <div className="logo">
          <h1>📚 My Learning</h1>
        </div>
        <nav className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="dashboard-main">
        <div className="content-box">{renderTabContent()}</div>
      </main>
    </div>
  );
};

export default LearningDashboard;
