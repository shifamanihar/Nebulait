import React from 'react'
import './header.css'  
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

export default function Dropmenu({ isOpen }) {

    const topics = ["Java", "HTML", "CSS", "MySQL"];

  return (
    <>
        <div className={`dropdown_menu ${isOpen ? 'show' : 'hide'}`}>
           <div className="left-box">
                <ul className="pt-2 list list-inline">
                    {topics.map((topic, index) => (
                        <li key={index}>
                            <Link to={`/${topic.toLowerCase()}`} className="FS">
                                {topic}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="right-box">
                <div className="pro-box"></div>

                <div className="course-detail-box d-flex justify-content-around ">
                    <div className="topic-list">    
                        <p>Popular Tutorials</p>
                        <ul className='p-0'>
                            <li className='m-0 my-2'>Java "Hello World" Program</li>
                            <li className='m-0 my-2'>Java for Loop</li>
                            <li className='m-0 my-2'>Arrays in Java</li>
                            <li className='m-0 my-2'>Interfaces in Java</li>
                        </ul>
                        <Button className='my-2 bg-primary text-color'> All Java Topics <EastIcon className='mx-2'/> </Button>
                    </div>

                    <div className="material-list">
                        <p>Reference Materials</p>
                        <ul className='p-0'>
                            <li className='m-0 my-3 '>
                                <Button className='w-100 bg-primary text-color'>String <span> <EastIcon className='ms-3'/> </span></Button>
                            </li>
                            <li className='m-0 my-3 '>
                                <Button className='w-100 bg-primary text-color'>List Methods <span> <EastIcon className='ms-3'/> </span></Button>
                            </li>
                            <li className='m-0 my-3 '>
                                <Button className='w-100 bg-primary text-color'>Map <span> <EastIcon className='ms-3'/> </span></Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}  
