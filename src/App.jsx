import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import NewPage from './Components/NewPage/NewPage';
import TutorialHome from './Components/TutorialHome';
import OnlineCompilers from './Components/OnlineCompilers';

// Compiler Pages
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Existing pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/tutorial" element={<TutorialHome />} />

        {/* Online Compilers Page */}
        <Route path="/compilers" element={<OnlineCompilers />} />

        {/* Compiler Routes */}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

