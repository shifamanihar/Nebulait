 // src/Components/Pages/Home/Home.jsx

import React from 'react';
import './home.css';
import bgimg from '../../Images/Background/banner-shap-2.png';

import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import ServicesSection from '../../ServicesSection';
import InteractiveLearningSection from '../../InteractiveLearningSection';
import { Link } from 'react-router-dom';
import OnlineCompilers from '../../OnlineCompilers'; // ✅ Corrected path

export default function Home() {
  return (
    <div className="container-fluid homepage">
      <div className="container d-flex justify-content-evenly mt-5">
        <div className="content-box">
          <h1>Creative Web Development Company</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus, risus sit amet auctor sodales, justo erat tempor eros.
          </p>
          <Button>
            View Case Studies <KeyboardArrowRightIcon />
            <span className="circle"></span>
          </Button>
        </div>
        <div className="homepage-img"></div>
      </div>

      <ServicesSection />
      <InteractiveLearningSection />

      <div className="go-to-newpage">
        <Link to="/newpage" className="newpage-btn">
          Go to New Page
        </Link>
      </div>

      <OnlineCompilers />
    </div>
  );
}



