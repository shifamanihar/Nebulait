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

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login"); // ✅ fixed lowercase route
    };

    return (
        <div className='header container-fluid'>
            <div className="row">
                <div className="images-wrapper col-md-2">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="search-box col-md-3">
                    <span><SearchIcon /></span>
                    <input type="text" placeholder='Search Tutorial & Examples' />
                </div>

                <nav className='col-md-5'>
                    <ul className='list list-inline mb-0'>
                        <li className='list-inline-item mx-2' onClick={() => toggleDropdown("tutorial")}>
                            <Button>
                                Tutorial <ExpandMoreIcon className='ms-2' />
                            </Button>
                            {openDropdown === "tutorial" && <Dropmenu />}
                        </li>

                        <li className='list-inline-item mx-2' onClick={() => toggleDropdown("examples")}>
                            <Button>
                                Examples <ExpandMoreIcon className='ms-2' />
                            </Button>
                            {openDropdown === "examples" && <Dropmenu />}
                        </li>

                        <li className='list-inline-item mx-2'>
                            <Button>
                                Courses <ExpandMoreIcon className='ms-2' />
                            </Button>
                        </li>
                    </ul>
                </nav>

                <ul className='right-end-btn col-md-2 list list-inline'>
                    <li className='list-inline-item'>
                        <Link to="/contact">
                            <Button className='phone-btn'>
                                <LocalPhoneIcon />
                            </Button>
                        </Link>
                    </li>

                    <li className='list-inline-item'>
                        <Button className='pro-btn' onClick={handleLoginClick}>
                            Upgrade To Pro
                        </Button>
                    </li>

                    <li className='list-inline-item ms-1'>
                        <Button><SettingsIcon /></Button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
