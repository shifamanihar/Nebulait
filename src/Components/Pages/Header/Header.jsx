import React, { useState } from 'react';
import './header.css';
import logo from "../../Images/Logo/neblogow.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dropmenu from './Dropmenu';

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const handleLoginClick = () => {
        navigate("/login");
    };

    return (
        <div className='header container-fluid'>
            <div className="row align-items-center">
                <div className="images-wrapper col-auto">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="search-box col">
                    <span><SearchIcon /></span>
                    <input type="text" placeholder='Search Tutorial & Examples' />
                </div>

                <nav className='col-auto'>
                    <ul className='list list-inline mb-0 d-flex align-items-center'>
                        <li className='list-inline-item' onClick={() => toggleDropdown("tutorial")}>
                            <Button>
                                Tutorial <ExpandMoreIcon className='ms-2' />
                            </Button>
                            {openDropdown === "tutorial" && <Dropmenu />}
                        </li>

                        <li className='list-inline-item' onClick={() => toggleDropdown("examples")}>
                            <Button>
                                Examples <ExpandMoreIcon className='ms-2' />
                            </Button>
                            {openDropdown === "examples" && <Dropmenu />}
                        </li>

                        <li className='list-inline-item' onClick={() => toggleDropdown("courses")}>
                            <Button>
                                Courses <ExpandMoreIcon className='ms-2' />
                            </Button>
                            {openDropdown === "courses" && <Dropmenu />}
                        </li>

                        <li className='list-inline-item' onClick={() => toggleDropdown("career")}>
                            <Button>
                                Career <ExpandMoreIcon className='ms-2' />
                            </Button>
                            {openDropdown === "career" && <Dropmenu />}
                        </li>
                    </ul>
                </nav>

                <ul className='right-end-btn col-auto list list-inline mb-0 d-flex align-items-center'>
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
                        <Button className='settings-btn'>
                            <SettingsIcon />
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
