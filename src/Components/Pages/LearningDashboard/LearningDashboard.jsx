import React, { useState } from "react";
import "./LearningDashboard.css";

const tabs = [
  { key: "all", label: "All Courses" },
  { key: "lists", label: "My Lists" },
  { key: "wishlist", label: "Wishlist" },
  { key: "dashboard", label: "Dashboard" },
  { key: "cart", label: "Your Cart" },
];

const LearningDashboard = () => {
  const [activeTab, setActiveTab] = useState("all");

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
            <p className="tab-desc">Courses you've added to your wishlist.</p>
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
            <p className="tab-desc">Manage your selected courses.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="learning-dashboard">
      <header className="dashboard-header">
        <div className="logo"> <h1>📚 My Learning</h1></div>
        <nav className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
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
