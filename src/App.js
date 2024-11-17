import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import Setup from './components/Setup';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/work">Work</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/setup">Setup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;