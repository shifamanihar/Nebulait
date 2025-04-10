import React, { useState } from 'react';
import './header.css';   
import logo from "../../Images/Logo/neblogow.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dropmenu from './Dropmenu';

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);  // Track which dropdown is open

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <>
            <div className='header container-fluid'>
                <div className="row">
                    {/* Logo Section */}
                    <div className="images-wrapper col-md-2">
                        <img src={logo} alt="Logo" />
                    </div>

                    {/* Search Box */}
                    <div className="search-box col-md-3">
                        <span><SearchIcon/></span>
                        <input type="text" placeholder='Search Tutorial & Examples'/>
                    </div>

                    {/* Navigation */}
                    <nav className='col-md-5'>
                        <ul className='list list-inline mb-0'>
                            {/* Tutorials Menu */}
                            <li className='list-inline-item mx-2' onClick={() => toggleDropdown("tutorial")}>
                                <Button>
                                    Tutorial <ExpandMoreIcon className='ms-2'/>
                                </Button>
                                {openDropdown === "tutorial" && <Dropmenu />}
                            </li>

                            {/* Examples Menu */}
                            <li className='list-inline-item mx-2' onClick={() => toggleDropdown("examples")}>
                                <Button>
                                    Examples <ExpandMoreIcon className='ms-2'/>
                                </Button>
                                {openDropdown === "examples" && <Dropmenu />}
                            </li>

                            {/* Courses Menu (No Dropdown) */}
                            <li className='list-inline-item mx-2'>
                                <Button>
                                    Courses <ExpandMoreIcon className='ms-2'/>
                                </Button>
                            </li>
                        </ul>
                    </nav>

                    {/* Right End Buttons */}
                    <ul className='right-end-btn col-md-4 list list-inline'>
                        <li className='list-inline-item'>
                            <Link to="/contact">
                                <LocalPhoneIcon/>
                            </Link>
                        </li>
                        <li className='list-inline-item'>
                            <Button>Upgrade To Pro</Button>
                        </li>
                        <li className='list-inline-item ms-1'>
                            <Button><SettingsIcon/></Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
