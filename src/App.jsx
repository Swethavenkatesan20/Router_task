import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/all-courses">All Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/full-stack">Full Stack Development</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/data-science">Data Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cyber-security">Cyber Security</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/career">Career</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container bg-dark  text-center p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/full-stack" element={<FullStack />} />
            <Route path="/data-science" element={<DataScience />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
