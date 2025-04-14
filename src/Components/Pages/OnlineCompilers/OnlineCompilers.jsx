import React from "react";
import { Link } from "react-router-dom";
import "./OnlineCompilers.css";

const compilerLinks = [
  { name: "Python Compiler", path: "/compiler/python" },
  { name: "C Compiler", path: "/compiler/c" },
  { name: "C++ Compiler", path: "/compiler/cpp" },
  { name: "Java Compiler", path: "/compiler/java" },
  { name: "JavaScript Compiler", path: "/compiler/javascript" },
  { name: "HTML/CSS Editor", path: "/compiler/htmlcss" },
  { name: "SQL Editor", path: "/compiler/sql" },
  { name: "R Compiler", path: "/compiler/r" },
  { name: "PHP Compiler", path: "/compiler/php" },
  { name: "Go Compiler", path: "/compiler/go" },
  { name: "Swift Compiler", path: "/compiler/swift" },
  { name: "C# Compiler", path: "/compiler/csharp" },
  { name: "Rust Compiler", path: "/compiler/rust", center: true },
];

const OnlineCompilers = () => {
  return (
    <div className="online-compilers-container">
      <h2>
        <span role="img" aria-label="lab">🧪</span> Practice with our Online Compilers
      </h2>
      <p>
        We believe coding should be accessible to all, so we made our own compilers for web and mobile – and they're free!
      </p>

      <div className="compiler-grid">
        {compilerLinks.map((compiler, index) => (
          <Link
            key={index}
            to={compiler.path}
            className={`compiler-card ${compiler.center ? "center-highlight" : ""}`}
          >
            {compiler.name} <span className="arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OnlineCompilers;


 
