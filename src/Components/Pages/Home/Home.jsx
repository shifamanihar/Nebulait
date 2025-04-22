import React from 'react';
import './home.css';
import bgimg from '../../Images/Background/banner-shap-2.png';
import { Button } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ServicesSection from '../ServicesSection/ServicesSection';
import InteractiveLearningSection from '../InteractiveLearningSection/InteractiveLearningSection';
import { Link } from 'react-router-dom';
import OnlineCompilers from '../OnlineCompilers/OnlineCompilers';
import CourseList from '../LearnProgramiz/CourseList'; // ✅ Course List
import CurvedSection from '../CurvedSection/CurvedSection'; // ✅ Corrected import path
import WhyNebula from '../WhyNebula/WhyNebula';
import AboutAgencyPage from '../AboutPage/AboutPage';
import LearnOnTheGo from '../LearnOnTheGo/LearnOnTheGo';
import Examples from '../TutorialHome/Examples';

export default function Home() {
  return (
    <div className="container-fluid homepage">
      {/* ✅ Hero Section */}
      <div className="hero-section">
        <div className="content-box">
          <h1>
            Creative Web <br />
            Development <br />
            Company
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus,
            risus sit amet auctor sodales, justo erat tempor eros.
          </p>
          <Button>
            Get A Free Quote <KeyboardArrowRightIcon />
            <span className="circle"></span>
          </Button>
        </div>

        <div className="image-box">
          <img src={bgimg} alt="Hero" className="hero-image" />
        </div>
      </div>

      {/* ✅ Course List Section */}
      <CourseList />

      {/* ✅ CurvedSection Added */}
      <CurvedSection />

      {/* ✅ Interactive Learning */}
      <InteractiveLearningSection />

      {/* ✅ Practice with Compilers */}
      <OnlineCompilers />

      {/* ✅ Practice with Examples*/}
      <Examples />

      {/* ✅ Why Nebula */}
      <WhyNebula />

      {/* ✅ About Page */}
      <AboutAgencyPage />

      {/* ✅ Services */}
      <ServicesSection />

      {/* ✅ Learn On The Go */}
      <LearnOnTheGo />
    </div>
  );
}

