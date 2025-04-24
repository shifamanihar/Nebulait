import React, { useState } from 'react';
import './Sidebar.css';


const menuData = [
  {
    title: 'Python Introduction',
    subItems: ['Get Started With Python',
      'Your First Python Program',
      'Python Comments',
],
  },
  {
    title: 'Python Fundamentals',
    subItems: [ 'Python Variables and Literals',
      'Python Type Conversion',
      'Python Basic Input and Output',
      'Python Operators',],
  },
  {
    title: 'Python Flow Control',
    subItems: ['Python if...else Statement',
      'Python for Loop',
      'Python while Loop',
      'Python break and continue',
      'Python pass Statement',
],
  },
  {
    title: 'Python Data types',
    subItems: ['Python Numbers, Type Conversion and Mathematics',
        'Python List',
        'Python Tuple',
        'Python Strings',
        'Python Sets',
        'Python Dictionary',
],
  },
  {
    title: 'Python Functions',
    subItems: ['Python Function Arguments',
        'Python Variable Scope',
        'Python Global Keyword',
        'Python Recursion',
        'Python Modules',
        'Python Package',
        'Python Main function', ],
  },
  {
    title: 'Python Files',
    subItems: ['Python Directory and Files Management',
        'Python CSV: Read and Write CSV Files',
        'Reading CSV files in Python',
        'Writing CSV files in Python',
],
  },
  {
    title: 'Python Exception Handling',
    subItems: ['Python Exceptions',
        'Python Exception Handling',
        'Python Custom Exceptions',  
],
  },
  {
    title: 'Python Object & Class',
    subItems: ['Python Classes and Objects',
        'Python Inheritance',
        'Python Multiple Inheritance',
        'Polymorphism in Python',
        'Python Operator Overloading',],
  },
  {
    title: 'Python Advanced Topics',
    subItems: ['Python List Comprehension',
        'Python Lambda/Anonymous Function',
        'Python Iterators',
        'Python Generators',
        'Python Namespace and Scope',
        'Python Closures',
        'Python Decorators',
        'Python @property decorator',
        'Python RegEx', ],
  },
  {
    title: 'Python Date and Time',
    subItems: ['Python datetime',
        'Python strftime()',
        'Python strptime()',
        'How to get current date and time in Python?',
        'Python Get Current time',
        'Python timestamp to datetime and vice-versa',
        'Python time Module',
        'Python time Module',],
  },
  {
    title: 'Additional Topic',
    subItems: ['Precedence and Associativity of Operators in Python',
        'Python Keywords and Identifiers',
        'Python Assert Statement',
        'Python JSON',
        'Python pip',
        'Python *args and **kwargs',
],
  },
];

function Sidebar() {
  const [expanded, setExpanded] = useState(null);

  const toggleMenu = (index) => {
    setExpanded(index === expanded ? null : index);
  };

  return (
    <div className="sidebar">
      {menuData.map((menu, index) => (
        <div
          key={index}
          className={`menu-card ${expanded === index ? 'expanded' : ''}`}
          onClick={() => toggleMenu(index)}
        >
          <div className="menu-title">
            {menu.title}
            <span className="arrow">{expanded === index ? '▲' : '▶'}</span>
          </div>
          {expanded === index && (
            <div className="submenu">
              {menu.subItems.map((subItem, subIndex) => (
                <div key={subIndex} className="submenu-item">
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar ;