import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import NewPage from './Components/Pages/NewPage/NewPage';
import OnlineCompilers from './Components/Pages/OnlineCompilers/OnlineCompilers';

import PythonCompiler from './CompilerPages/PythonCompiler';
import RCompiler from './CompilerPages/RCompiler';
import SQLEditor from './CompilerPages/SQLEditor';
import HTMLCSSEditor from './CompilerPages/HTMLCSSEditor';
import JavaScriptCompiler from './CompilerPages/JavaScriptCompiler';
import JavaCompiler from './CompilerPages/JavaCompiler';
import CCompiler from './CompilerPages/CCompiler';
import CppCompiler from './CompilerPages/CppCompiler';
import CSharpCompiler from './CompilerPages/CSharpCompiler';
import GoCompiler from './CompilerPages/GoCompiler';
import PHPCompiler from './CompilerPages/PHPCompiler';
import SwiftCompiler from './CompilerPages/SwiftCompiler';
import RustCompiler from './CompilerPages/RustCompiler';

import Login from './Components/Login/Login';
import StartLearning from './LearningPathPytho/StartLearning';
import CreateProject from './LearningPathPytho/CreateProject';
import Enrollment from './LearningPathPytho/Enrollment';
import PythonCourse from './Components/Pages/LearnProgramiz/PythonCourse';
import WebsiteFooter from './Components/Pages/WebsiteFooter/WebsiteFooter';
import Sidebar from './Components/Pages/SideBar/SideBar';
import JobNotificationPage from "./Components/Pages/JobNotificationPage/JobNotificationPage";


function App() {
  return (
    <BrowserRouter>
      <Header  variant="default"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/course/:courseName" element={<PythonCourse />} />
        <Route path="/compilers" element={<OnlineCompilers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/start-learning" element={<StartLearning />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/try-now" element={<Enrollment />} />
        <Route path="/menu" element={<Sidebar />} />

        <Route path="/compiler/python" element={<PythonCompiler />} />
        <Route path="/compiler/r" element={<RCompiler />} />
        <Route path="/compiler/sql" element={<SQLEditor />} />
        <Route path="/compiler/htmlcss" element={<HTMLCSSEditor />} />
        <Route path="/compiler/javascript" element={<JavaScriptCompiler />} />
        <Route path="/compiler/java" element={<JavaCompiler />} />
        <Route path="/compiler/c" element={<CCompiler />} />
        <Route path="/compiler/cpp" element={<CppCompiler />} />
        <Route path="/compiler/csharp" element={<CSharpCompiler />} />
        <Route path="/compiler/go" element={<GoCompiler />} />
        <Route path="/compiler/php" element={<PHPCompiler />} />
        <Route path="/compiler/swift" element={<SwiftCompiler />} />
        <Route path="/compiler/rust" element={<RustCompiler />} />
        <Route path="/job-notification" element={<JobNotificationPage />} />
       </Routes>
      <WebsiteFooter />
    </BrowserRouter>
  );
}

export default App;

