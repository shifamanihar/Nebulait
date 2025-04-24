import React, { useState ,useRef , useEffect} from 'react';
import './header.css';
import logo from "../../Images/Logo/neblogow.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import profile from "../../Images/profile-icon.jpg"
import { WidthFull } from '@mui/icons-material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


export default function Header({ variant = "default" }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };
    const location = useLocation();

    const hideElement = ["/login"].includes(location.pathname);
    const handleLoginClick = () => {
        navigate("/login");
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const handleClickAway = () => {
        setMenuOpen(false);
    };
    
    const Dropmenu = () => (
        <div className="dropdown_menu d-flex">
            <span className="close-btn" onClick={closeDropdown}>
                <CloseIcon />
            </span>
            <div className="left-box">
                <ul>
                    <li>Beginner</li>
                    <li>Intermediate</li>
                    <li>Advanced</li>
                </ul>
            </div>
            <div className="right-box">
                <div className="pro-box d-flex align-items-center justify-content-center">
                    <h5>Unlock PRO Content</h5>
                </div>
                <div className="course-detail-box">
                    <div className="topic-list">
                        <p>Popular Topics</p>
                        <ul>
                            <li>Variables</li>
                            <li>Loops</li>
                            <li>Functions</li>
                        </ul>
                    </div>
                    <div className="material-list">
                        <p>Learning Paths</p>
                        <ul>
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Machine Learning</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
    
    const employee ={
        name : "Shubham Musale",
        email : "shubhammusale111@gmail.com",
    }
    return (
        <div>
            {variant === "default" && !hideElement && (
                <div className='header d-flex justify-content-around align-items-center container-fluid'>

                    <div className="images-wrapper ">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="search-box ">
                        <span><SearchIcon /></span>
                        <input type="text" placeholder='Search Tutorial & Examples' />
                    </div>
                    <nav>
                        <ul className='list list-inline mb-0 d-flex align-items-center'>
                            {["tutorial", "examples", "courses", "career"].map(menu => (
                                <li
                                    key={menu}
                                    className='list-inline-item position-relative'
                                    onClick={() => toggleDropdown(menu)}
                                >
                                    <Button>
                                        {menu.charAt(0).toUpperCase() + menu.slice(1)}
                                        <ExpandMoreIcon className='ms-2' />
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <ul className='right-end-btn list list-inline mb-0 d-flex align-items-center'>
                        <li className='list-inline-item'>
                            <Link to="/contact">
                                <Button className='phone-btn'>
                                    <LocalPhoneIcon />
                                </Button>
                            </Link>
                        </li>
                        <li className='list-inline-item'>
                            <Button className='pro-btn' onClick={handleLoginClick} disableElevation>
                                UPGRADE TO PRO
                            </Button>
                        </li>
                        <li className='list-inline-item ms-1'>
                        <ClickAwayListener onClickAway={handleClickAway}>
                    <div className="profile-dropdown">      
                        <button className="profile-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        <img
                            src={profile}
                            alt="User"
                            className="profile-img mt-1"
                        />
                        
                        </button>

                        {menuOpen && (
                        <div className="dropdown-menu show">
                            <div className="user-info">
                        
                            <img src={profile}  className="user-img" alt="profile pic"/>
                            <div>
                                <h6 className="mb-0">{employee.name}</h6>
                                <p className="email mb-0">{employee.email}</p>
                            </div>
                            </div>

                            <button className="dropdown-item">
                                 Dashboard
                            </button>
                            <button className="dropdown-item">
                                My Learning
                            </button>
                            <button className="dropdown-item">
                                 Whish List
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => {
                                localStorage.clear(); 
                                navigate("/"); 
                                }}
                                >
                                <ExitToAppOutlinedIcon className="me-2" /> Logout
                            </button>
                        </div>
                        )}
                    </div>
                </ClickAwayListener>
                        </li>
                    </ul>

                    {/* Render Dropdown Only Once */}
                    {openDropdown && <Dropmenu />}
                </div>
            )}
        </div>
    );
}